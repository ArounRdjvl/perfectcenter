import {AdminNavigation} from "../ components/admin/AdminNavigation";
import {Rooms} from "../ components/admin/Rooms";
import {useRouter} from "next/router";

export default function Admin() {
    useRouter()
    return (
        <div>
            <AdminNavigation/>
            <Rooms/>
        </div>
    )
}
