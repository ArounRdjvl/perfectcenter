import { Button, TextField } from "@material-ui/core"
import { useConnexion } from "modules/connexion"
import React from "react"

// page d'exemple pour l'utilisation du hook useConnexion
// la connexion peut être implémenté de la même manière sur n'importe quel page existante
export default function index() {
    const {
        connected,
        email: connectedUser, // c'est un alias car username est déjà utilisé pour le state
        admin,
        connect,
        disconnect
    } = useConnexion()

    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [errorMessage, setErrorMessage] = React.useState<string>("")

    async function handleConnectionClick() {
        try {
            await connect(email, password)
        } catch (e: any) {
            setErrorMessage(e.toString())
        }
    }

    React.useEffect(() => {
        setPassword("")
        setErrorMessage("")
    }, [connected])

    if (connected) {
        return (
            <div>
                you are connected
                <br />
                username : {connectedUser}
                <br />
                you are {admin ? "an admin" : "not an admin"}
                <br />
                <Button onClick={() => disconnect()}>se déconnecter</Button>
            </div>
        )
    } else {
        return (
            <div>
                <TextField
                    name="user"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
                <TextField
                    name="user"
                    label="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <Button onClick={handleConnectionClick}>se connecter</Button>
                <br />
                {errorMessage}
            </div>
        )
    }
}
