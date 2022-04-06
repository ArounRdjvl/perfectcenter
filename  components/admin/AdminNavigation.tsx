import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import Link from "next/link"

export function AdminNavigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    Admin page
                </Typography>

                <Button color="inherit">Rooms</Button>
                <Link href="/"><Button color="inherit">return to website</Button></Link>
            </Toolbar>
        </AppBar>
    )
}