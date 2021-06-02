import { Button, Container, Link, Typography } from "@material-ui/core";
import React from "react";

export default function Home() {
    return <Container style={{ display: "flex", height: "100%" }}>
        <div style={{ margin: "auto", display:"flex", flexDirection:"column", alignItems:"center" }}>
            <img src="Logo.png" alt="Logo PerfecCenter" width="250" />
            <Typography align="center" variant="h1">
                Error 404 : Stay Calm, Everything's good.
            </Typography>
            
            <Link href="/" style={{marginTop:"1rem"}}>
                <Button size="large">Accueil</Button>
            </Link>
        </div>
    </Container>
}
