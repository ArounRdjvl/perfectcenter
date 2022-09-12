function getApiObject(token: string | null) {
  // TODO futures requests to the back end
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

  async function connect(email: string, password: string) {
    // TDB
  }

  function disconnect() {
    // TDB
  }

  // TODO replace by real informations
  return {
    connected: false,
    token: null,
    email: null,
    admin: null,
    connect,
    disconnect,
    api: getApiObject(null),
  }
}
