const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

async function doRequest<T = any>(url: RequestInfo, options?: RequestInit) {
  const result = await fetch(url, { ...defaultOptions, ...options })
  if (!result.ok) {
    throw new Error(result.statusText)
  }
  return (await result.json()) as T
}

export async function get<T = any>(url: string) {
  return doRequest<T>(url)
}

export async function post<T = any>(url: string, body: any) {
  return doRequest<T>(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}
