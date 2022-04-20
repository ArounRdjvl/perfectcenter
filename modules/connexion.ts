import jwt from 'jsonwebtoken'
import { useEffect, useState } from 'react'

const tokenKey = 'jwtToken'
// TODO futures requests to the back end

function getApiObject(token: string | null) {
  return {}
}

function fetchJson(path: string, body: Record<string, unknown>) {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((t) => t.json())
}

export function useConnexion() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem(tokenKey))
  }, [])

  const { email, admin } = token
    ? (jwt.decode(token) as { email: string; admin: boolean })
    : { email: null, admin: null }

  async function connect(email: string, password: string) {
    const { token, error } = await fetchJson('/api/login', {
      email,
      password,
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
    email,
    admin,
    connect,
    disconnect,
    api: getApiObject(token),
  }
}
