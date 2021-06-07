import React from "react"
import Head from "next/head"
import { Navigation } from "../ components/Navigation"
import { Membre } from "../ components/Membre"
import "../styles/Home.module.less"
import { makeStyles } from "@material-ui/core/styles"
import { Container, useTheme } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500
    }
}))

export default function membres() {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Notre Equipe</title>
            </Head>
            <Container>
                <Navigation />
                <Membre/>
            </Container>
        </div>
    )
}
