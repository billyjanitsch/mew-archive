const BASE_URL = '/api'

export default async (url, params) => {
  const response = await fetch(`${BASE_URL}/${url}`, params)
  return response.json()
}
