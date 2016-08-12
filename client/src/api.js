const BASE_URL = '/api'

export default async (path, params) => {
  const response = await fetch(`${BASE_URL}/${path}`, params) // eslint-disable-line
  return response.json()
}
