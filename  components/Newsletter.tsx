import {
    Typography,
    Grid,
    useTheme,
    Divider as MuiDivider,
    useMediaQuery,
    makeStyles,
    TextField,
    Button
} from "@material-ui/core"
import { Divider } from "../ components/Divider"
import React from "react"
import { colors } from "../modules/theme"

export function Newsletter() {
    const theme = useTheme()
    const [name, setName] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")

    return (
        <div
            style={{
                width: "100%",
                height:"20rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "60%",
                    height:"100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 50,
                    padding: "1rem 5.5rem",
                    background: colors.beige
                }}
            >
                <Typography align="justify" style={{fontSize: "28px"}}>
                    Newsletter
                </Typography>
                <Divider color="vert" width="90px" />
                <Typography align="justify" style={{fontSize: "20px", marginTop: "1rem"}}>
                    Ne manquez aucune information sur les offres et les nouveautés de PerfectCenter en vous inscrivant à notre Newletter !
                </Typography>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent:"space-between",
                    }}
                >
                    <TextField
                        style={{marginBottom: "2rem", marginTop: "1rem", width: "45%" }}
                        name="name"
                        label="Prénom"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        style={{marginBottom: "2rem", marginTop: "1rem",  width: "45%" }}
                        name="email"
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Button variant="contained" color="secondary" size="large"  style={{width: "40%", fontSize:"20px"}} >
                    Inscription
                </Button>
            </div>
            <div
                style={{
                    position: "absolute",
                    width: "8rem",
                    height:"8rem",
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "50%",
                    marginRight: "49rem",
                    justifyContent: "center",
                    alignItems: "center",
                    background: colors.vert
                }}
            >
                <img src="picto/E-mail.png" width={75} style={{ zIndex: 2 }}/>
            </div>
        </div>
    )
}
