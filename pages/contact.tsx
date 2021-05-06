import React from "react"
import { Navigation } from "../ components/Navigation"
import {
    Button,
    Container,
    Divider,
    Grid,
    TextField,
    Theme,
    Typography,
    useTheme
} from "@material-ui/core"

export default function contact() {
    const [name, setName] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [subject, setSubject] = React.useState<string>("")
    const [content, setContent] = React.useState<string>("")

    const { palette, spacing } = useTheme()

    function validateForm() {
        return true // TODO validate form
    }

    function submitForm() {
        fetch("/api/sendMail", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, subject, content })
        }).then((res) => {
            res.status === 200
                ? console.log("email sent")
                : console.error("error email")
        })
    }

    return (
        <Container>
            <Navigation />
            <Grid container>
                <Grid
                    item
                    xs={7}
                    style={{
                        zIndex: 2,
                        margin: "3rem 0 3rem 0",
                        backgroundColor: "#E3CCB4",
                        padding: spacing(1),
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <TextField
                        style={{ margin: spacing(1) }}
                        name="name"
                        label="Nom"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        style={{ margin: spacing(1) }}
                        name="email"
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        style={{ margin: spacing(1) }}
                        name="subject"
                        label="Sujet"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <TextField
                        style={{ margin: spacing(1) }}
                        name="content"
                        label="Message"
                        type="text"
                        multiline
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button onClick={submitForm}>Envoyer</Button>
                </Grid>
                <Grid
                    item
                    xs={5}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            left: "-20%",
                            zIndex: 0,
                            position: "absolute",
                            backgroundColor: "#849994",
                            width: "120%",
                            height: "100%"
                        }}
                    ></div>
                    <div style={{zIndex: 1}}>
                        <Typography variant="h1" align="center"  style={{margin: spacing(1)}} >Venir à PerfectCenter</Typography>
                        <Divider /> 
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.306362520997!2d2.3082491156748466!3d48.87143597928878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8823b9b9a9b19%3A0x4e5130e5e04510fa!2sPerfectCenter!5e0!3m2!1sfr!2sfr!4v1620315685130!5m2!1sfr!2sfr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                        <Divider />
                        <p style={{ textAlign: "center" }}>
                            34 rue du colisée
                            <br /> 75008 - Paris
                        </p>
                        <div>
                            <Typography variant="h2" style={{ textDecoration: "underline", margin: spacing(1) }}>
                                Métro :
                            </Typography>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "0 0 0.5rem 1rem"
                                }}
                            >
                                <img src="icons/metro1.png" width={30} />
                                <Typography style={{ marginLeft: "1rem" }}>
                                    Station Franklin-Roosevelt
                                </Typography>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "1rem",
                                    margin: "0 0 0.5rem 1rem"
                                }}
                            >
                                <img src="icons/metro9.png" width={30} />
                                <Typography style={{ marginLeft: "1rem" }}>
                                    Station Saint Philippe du Roule
                                </Typography>
                            </div>
                            <Typography variant="h2" style={{ textDecoration: "underline", margin: spacing(1) }}>
                                Bus :
                            </Typography>
                            <Typography variant="h2" style={{ textDecoration: "underline", margin: spacing(1) }}>
                                RER :
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
