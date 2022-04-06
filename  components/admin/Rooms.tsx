import * as React from "react";
import useRequest from "../../modules/useRequest";
import {DataGrid, GridCellEditCommitParams, GridColDef, GridToolbar, MuiBaseEvent, MuiEvent} from '@mui/x-data-grid';
import {Button} from "@material-ui/core";
import {Room} from "@prisma/client";

function getColumns(rooms: Room[], setRoom: React.Dispatch<React.SetStateAction<Room[]>>): GridColDef[] {
    return [
        {field: 'id', headerName: 'ID', width: 50},
        {
            field: 'name',
            width: 200,
            headerName: 'Nom',
            editable: true,
        },
        {
            field: 'description',
            width: 300,
            headerName: 'Description',
            editable: true,
        },
        {
            field: 'building',
            headerName: 'Bâtiment',
            editable: true,
        },
        {
            field: 'floor',
            headerName: 'Etage',
            editable: true,
        },
        {
            field: 'area',
            headerName: 'Surface',
            type: "number",
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Prix/j',
            type: "number",
            editable: true,
        },
        {
            field: 'bookingOpen',
            headerName: 'possibilité de réservation (jour)',
            type: "number",
            editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 160,
            renderCell: (room: any) => {
                return <Button onClick={() => {
                    setRoom(rooms.filter((r) => r.id !== room.id))
                }}>supprimer</Button>
            }

        },
    ]
}


export function Rooms() {
    const [rooms, setRooms] = React.useState<Room[]>([])

    const {get} = useRequest()

    async function request() {
        setRooms(await get('/api/admin/rooms'))
    }

    React.useEffect(() => {
        request()
    }, [])

    async function handleVerification() {
        const defaultRooms: Room[] = await get('/api/admin/rooms');
        const roomsAdded = rooms.filter((room) => !defaultRooms.find((defaultRoom) => defaultRoom.id === room.id))
        const roomsRemoved = defaultRooms.filter((defaultRoom) => !rooms.find((room) => defaultRoom.id === room.id))
        const roomEdited = rooms.filter((room) => defaultRooms.find((defaultRoom) => defaultRoom.id === room.id && defaultRoom.name !== room.name)) // almost
        // todo handle verification
    }

    function handleCellEdit(params: GridCellEditCommitParams, event: MuiEvent) {
        // this is to avoid errors when committing a cell
        // @ts-ignore
        event?.persist?.()
        console.log("params", params)
        // todo handle edit
    }


    return (<div style={{height: 800, width: '100%', padding: "1rem"}}>
        <DataGrid
            rows={rooms}
            columns={getColumns(rooms, setRooms)}
            checkboxSelection
            disableSelectionOnClick
            components={{
                Toolbar: GridToolbar,
            }}
            onCellEditCommit={handleCellEdit}
        />
        <Button onClick={() => {
            handleVerification()
        }}>apply</Button>
    </div>)
}