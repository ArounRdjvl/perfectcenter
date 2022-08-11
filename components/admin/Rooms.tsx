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
} from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core'
import { Prisma, Room } from '@prisma/client'
import { isEqual } from 'modules/browserUtils'
import { useCallback } from 'react'
import { Alert } from '@material-ui/lab'

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

function toRoom(gridroom: GridRoom): Partial<Room> {
  return {
    ...gridroom.current,
    ...(gridroom.id ? { id: gridroom.id } : {}),
  }
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
  const [error, setError] = React.useState<string | null>(null)
  const [gridRooms, setGridRooms] = React.useState<GridRoom[]>([])

  const theme = useTheme()

  const [popup, setPopup] = React.useState<PopupData | undefined>(undefined)

  const { get, post } = useRequest()

  const classes = useStyles()

  async function init() {
    const rooms = await get<Room[]>('/api/admin/room/all')

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
    const roomsAdded = gridRooms.filter((r) => r.default === undefined).map(toRoom)
    const roomsRemoved = gridRooms.filter((r) => r.default && r.current === undefined).map(toRoom)
    const roomsEdited = gridRooms
      .filter((r) => r.current && r.default && !isEqual(r.default, r.current))
      .map(toRoom)

    if (roomsAdded.length !== 0 || roomsEdited.length !== 0 || roomsRemoved.length !== 0) {
      setPopup({
        nbAdded: roomsAdded.length,
        nbEdited: roomsEdited.length,
        nbDeleted: roomsRemoved.length,
        perform: async () => {
          // TODO : replace by react error handler
          try {
            const rooms = await post<Room[]>('/api/admin/room/perform', {
              roomsAdded,
              roomsEdited,
              roomsRemoved,
            })
            setGridRooms(
              rooms.map((r) => ({
                id: r.id,
                current: { ...r },
                default: r,
              }))
            )
          } catch (e: any) {
            setError(e.message)
          }
        },
      })
    }
  }

  const handleCellEdit = useCallback(
    (params: GridCellEditCommitParams) => {
      const temp = { ...params }
      setGridRooms([
        ...gridRooms.map((room) => {
          if (room.id === temp.id) {
            return { ...room, current: { ...room.current, [temp.field]: temp.value } }
          }
          return room
        }),
      ])
    },
    [gridRooms]
  )

  const addRoom = React.useCallback(() => {
    setGridRooms((old) => {
      const allIds = old.map((g) => g.id).filter<number>((id): id is number => id != null)
      return [
        ...old,
        {
          // creating id corresponding to the max id + 1
          id: allIds.length ? Math.max(...allIds) + 1 : 0,
          current: {
            name: '',
            price: new Prisma.Decimal(0),
            bookingOpen: 0,
            description: '',
            area: 0,
          },
          default: undefined,
        },
      ]
    })
  }, [gridRooms])

  return (
    <div
      style={{
        width: '100%',
        padding: theme.spacing(1),
        gap: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        ...props.style,
      }}
    >
      <Button onClick={addRoom} style={{ alignSelf: 'flex-start' }}>
        ADD
      </Button>
      <DataGrid
        style={{ minHeight: '20rem', flexGrow: 1 }}
        rows={gridRooms}
        columns={getColumns(gridRooms, setGridRooms)}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        onCellEditCommit={handleCellEdit}
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
      <div style={{ display: 'flex', alignSelf: 'flex-end', gap: '1rem', alignItems: 'center' }}>
        {error && (
          <Alert
            variant="filled"
            severity="error"
            onClose={() => {
              setError(null)
            }}
          >
            {error}
          </Alert>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleVerification()
          }}
        >
          apply
        </Button>
      </div>
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
