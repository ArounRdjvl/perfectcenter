import React from "react"
import jwt_decode from "jwt-decode"

export type ReturnType = {
    connected: boolean
    token: string | null,
    user: User | null
    connect: (email: string, password: string) => void
    disconnect: () => void
}

export type User = any


function decodeUser(token: string | null) {
    if (!token) return null
    const obj = jwt_decode(token) as any

    return {
        id: obj.id,
        firstname: obj.firstname,
        lastname: obj.lastname,
        email: obj.email,
        role: obj.role
    }
}

export default function useAuthentication(): ReturnType {
    const [token, setToken] = React.useState<string | null>(
        typeof window !== "undefined" ? localStorage.getItem("jwt") : null
    )
    const [user, setUser] = React.useState<User | null>(decodeUser(token))

    React.useEffect(() => {
        setUser(decodeUser(token))
    }, [token])

    React.useEffect(() => {
        const listener = () => {
            if (typeof window !== "undefined") {
                setToken(localStorage.getItem("jwt"))
            }
        }
        window.addEventListener("update-jwt", listener);
        return () => {
            window.removeEventListener("update-jwt", listener)
        }
    })


    async function connect(email: string, password: string) {
        try {
            const response = await fetch("http://localhost:8080/auth/signin", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    username: email,
                    password,
                }),
            })

            const body = await response.json()
            localStorage.setItem("jwt", body.jwt)
            setToken(body.jwt)
            const event = new Event("update-jwt");
            window.dispatchEvent(event);
        } catch (e) {
            console.error(e)
        }
    }

    function disconnect() {
        localStorage.setItem("jwt", "")
        setToken(null)
        const event = new Event("update-jwt");
        window.dispatchEvent(event);
    }

    return {
        connected: !!token,
        token,
        user,
        connect,
        disconnect
    }
}
