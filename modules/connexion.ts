import jwt from "jsonwebtoken"
import { useEffect, useState } from "react"

const tokenKey = "jwtToken"

export function useConnexion() {
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        setToken(localStorage.getItem(tokenKey))
    }, [])

    const { username, admin } = token
        ? (jwt.decode(token) as { username: string; admin: boolean })
        : { username: null, admin: null }

    async function connect(username: string, password: string) {
        const { token, error } = await fetchJson("/api/login", {
            username,
            password
        })
        if (error) {
            throw new Error(error)
        }
        if (token) {
            setToken(token)
            // TODO not really secure
            localStorage.setItem(tokenKey, token)
        }
    }

    function disconnect() {
        setToken(null)
        localStorage.removeItem(tokenKey)
    }

    return {
        connected: token != null,
        token,
        username,
        admin,
        connect,
        disconnect,
        api: getApiObject(token)
    }
}

// TODO futures requests to the back end
function getApiObject(token: string | null) {
    return {}
}

function fetchJson(path: string, body: Object) {
    return fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then((t) => t.json())
}
