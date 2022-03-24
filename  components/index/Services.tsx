import {
    Typography,
    Grid,
    IconButton,
    useTheme,
    useMediaQuery
} from "@material-ui/core"
import React from "react"
import { Divider } from "../Divider"
import { useStyles } from "../../pages/index"
import { division, DivisionDesc } from "./DivisionDesc"
import {PerfectCircleIndex} from "./PerfectCircleIndex"
import {PerfectCareIndex} from "./PerfectCareIndex"
import {PerfectCorporateIndex} from "./PerfectCorporateIndex"
import { TitleBar } from " components/TitleBar"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export function Services() {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [clicked, setClicked] = React.useState<division | null>("circle")
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <>
            <TitleBar title="Nos 3 pôles" background={true} color="vert" paddingMobile="2rem 0 0 5vw" />
            <Typography variant="h1" align="center" style={{margin: "2rem 0 0.5rem"}}></Typography>
            <PerfectCircleIndex/>
            <PerfectCareIndex/>
            <PerfectCorporateIndex/>
        </>
    )
}
