import useAuthentication from './useAuthentication'

const basePath = 'http://localhost:3000'

const defaultOptions: RequestInit = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
}

export default function useRequest() {
  const { token } = useAuthentication()

  function buildMethod(method: string) {
    return async <T = any>(path: string): Promise<T> => {
      const url = basePath + path
      const response = await fetch(url, {
        ...defaultOptions,
        method,
        headers: {
          ...defaultOptions.headers,
          Authorization: `Bearer ${token}`,
        },
      })
      const json = await response.json()
      if (response.status >= 400) {
        throw new Error(json.message ?? response.statusText)
      }
      return json
    }
  }

  function buildBodyMethod(method: string) {
    return async <T = any>(path: string, body: Record<string, unknown>): Promise<T> => {
      const url = basePath + path
      const response = await fetch(url, {
        ...defaultOptions,
        method,
        headers: {
          ...defaultOptions.headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
      const json = await response.json()
      if (response.status >= 400) {
        throw new Error(json.message ?? response.statusText)
      }
      return json
    }
  }

  return {
    get: buildMethod('GET'),
    del: buildMethod('DELETE'),
    post: buildBodyMethod('POST'),
    put: buildBodyMethod('PUT'),
  }
}
