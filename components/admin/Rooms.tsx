import * as React from 'react'
import useRequest from 'modules/useRequest'
import {
  DataGrid,
  GridCellEditCommitParams,
  GridCellParams,
  GridColDef,
  GridRenderCellParams,
  GridRowClassNameParams,
  GridToolbar,
  GridValueGetterParams,
  MuiBaseEvent,
  MuiEvent,
} from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Prisma, Room } from '@prisma/client'
import { isEqual } from 'modules/browserUtils'

function getColumns(
  gridRooms: GridRoom[],
  setGridRooms: React.Dispatch<React.SetStateAction<GridRoom[]>>
): GridColDef[] {
  function genValueGetter(field: string) {
    return (params: GridValueGetterParams<GridRoom>) =>
      params.row.current?.[field] ?? params.row.default?.[field] ?? 'NONE'
  }

  return [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'name',
      width: 200,
      headerName: 'Nom',
      editable: true,
      valueGetter: genValueGetter('name'),
    },
    {
      field: 'description',
      width: 300,
      headerName: 'Description',
      editable: true,
      valueGetter: genValueGetter('description'),
    },
    {
      field: 'building',
      headerName: 'Bâtiment',
      editable: true,
      valueGetter: genValueGetter('building'),
    },
    {
      field: 'floor',
      headerName: 'Etage',
      editable: true,
      valueGetter: genValueGetter('floor'),
    },
    {
      field: 'area',
      headerName: 'Surface',
      type: 'number',
      editable: true,
      valueGetter: genValueGetter('area'),
    },
    {
      field: 'price',
      headerName: 'Prix/j',
      type: 'number',
      editable: true,
      valueGetter: genValueGetter('price'),
    },
    {
      field: 'bookingOpen',
      headerName: 'possibilité de réservation (jour)',
      type: 'number',
      editable: true,
      valueGetter: genValueGetter('bookingOpen'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 160,
      renderCell: (params: GridRenderCellParams<GridRoom>) => (
        <Button
          onClick={() => {
            setTimeout(() => {
              setGridRooms((old) => {
                const temp = [...old]
                const index = temp.findIndex((room) => room.id === params.row.id)
                if (temp[index].default) {
                  temp[index].current = undefined
                } else {
                  temp.splice(index, 1)
                }
                console.log('return', temp)
                return temp
              })
            })
          }}
        >
          supprimer
        </Button>
      ),
    },
  ]
}

const useStyles = makeStyles((theme) => ({
  deleted: {
    backgroundColor: theme.palette.error.main,
  },
  edited: {
    backgroundColor: theme.palette.warning.main,
  },
  added: {
    backgroundColor: theme.palette.success.main,
  },
}))

type PopupData = {
  nbAdded: number
  nbEdited: number
  nbDeleted: number
  perform: () => Promise<void>
}

type GridRoom = {
  id?: number
  current?: Partial<Room>
  default?: Room
}

export interface RoomsProps {
  style?: React.CSSProperties
}

export function Rooms(props: RoomsProps) {
  const [defaultRooms, setDefaultRooms] = React.useState<Room[]>([])
  const [gridRooms, setGridRooms] = React.useState<GridRoom[]>([])

  const [popup, setPopup] = React.useState<PopupData | undefined>(undefined)

  const { get, post } = useRequest()

  const classes = useStyles()

  /*
      async function udpate() {
          const defaultRooms = await get<Room[]>('/api/admin/rooms')
          setGridRooms(old => old.map(r => ({
              ...old,
              default: defaultRooms.find(d => d.id === r.id)
          })))
      }
       */

  async function init() {
    const rooms = await get<Room[]>('/api/admin/rooms')

    setGridRooms(
      rooms.map((r) => ({
        id: r.id,
        current: { ...r },
        default: r,
      }))
    )
  }

  React.useEffect(() => {
    init()
  }, [])

  async function handleVerification() {
    const roomsAdded = gridRooms.filter((r) => r.default === undefined)
    const roomsRemoved = gridRooms.filter((r) => r.default && r.current === undefined)
    const roomsEdited = gridRooms.filter(
      (r) => r.current && r.default && !isEqual(r.default, r.current)
    )

    if (roomsAdded.length !== 0 || roomsEdited.length !== 0 || roomsRemoved.length !== 0) {
      setPopup({
        nbAdded: roomsAdded.length,
        nbEdited: roomsEdited.length,
        nbDeleted: roomsRemoved.length,
        perform: async () => {
          const rooms = await post('/api/admin/room/perform', {
            roomsAdded,
            roomsEdited,
            roomsRemoved,
          })
          setDefaultRooms(rooms)
        },
      })
    }
  }

  const handleCellEdit = React.useCallback(
    (params: GridCellEditCommitParams, event: MuiEvent<MuiBaseEvent>) => {
      // this is to avoid errors when committing a cell
      // @ts-ignore
      event.persist?.()
      setGridRooms([
        ...gridRooms.map((room) => {
          if (room.id === params.id) {
            return { ...room, current: { ...room.current, [params.field]: params.value } }
          }
          return room
        }),
      ])
    },
    [gridRooms]
  )

  React.useEffect(() => {
    console.table(gridRooms)
  }, [gridRooms, defaultRooms])

  return (
    <div
      style={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        ...props.style,
      }}
    >
      <div style={{ flex: '1 0 0' }}>
        <Button
          onClick={() => {
            setGridRooms((old) => [
              ...old,
              {
                // id: Math.max(...old.map(r => r.id).filter(v => (v != undefined))) + 1,
                id:
                  Math.max(
                    ...old.reduce<number[]>((prev, current) => {
                      if (current.id) {
                        prev.push(current.id)
                      }
                      return prev
                    }, [])
                  ) + 1,
                current: {
                  name: '',
                  capacity: 0,
                  price: new Prisma.Decimal(0),
                  possibiliteReservation: 0,
                  description: '',
                  area: 0,
                },
                default: undefined,
              },
            ])
          }}
        >
          ADD
        </Button>
        <DataGrid
          rows={gridRooms}
          columns={getColumns(gridRooms, setGridRooms)}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: GridToolbar,
          }}
          onCellEditStop={handleCellEdit}
          getRowClassName={(params: GridRowClassNameParams<GridRoom>) => {
            if (params.row.default && params.row.current === undefined) {
              return classes.deleted
            }
            if (!params.row.default) {
              return classes.added
            }
            return ''
          }}
          getCellClassName={(params: GridCellParams<GridRoom>) => {
            if (
              params.row.default &&
              params.row.current &&
              params.row.current[params.field] !== params.row.default[params.field]
            ) {
              return classes.edited
            }
            return ''
          }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ alignSelf: 'flex-end' }}
        onClick={() => {
          handleVerification()
        }}
      >
        apply
      </Button>
      <Popup onClose={() => setPopup(undefined)} data={popup} />
    </div>
  )
}

export interface PopupProps {
  onClose: () => void
  data?: PopupData
}

export function Popup(props: PopupProps) {
  return (
    <Dialog open={!!props.data} onClose={() => props.onClose()}>
      <DialogContent>
        <Typography>{props.data?.nbAdded ?? ''} salles ajoutés </Typography>
        <Typography>{props.data?.nbDeleted ?? ''} salles supprimés</Typography>
        <Typography>{props.data?.nbEdited ?? ''} salles édités </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Fermer
        </Button>
        <Button
          onClick={() => {
            props.data?.perform()
            props.onClose()
          }}
          color="primary"
          autoFocus
        >
          Sauvegarder
        </Button>
      </DialogActions>
    </Dialog>
  )
}
