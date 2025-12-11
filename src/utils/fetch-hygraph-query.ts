export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: revalidate ? { revalidate } : {},
    body: JSON.stringify({ query }),
  })

  const json = await response.json()

  if (json.errors) {
    console.log('HYGRAPH ERROR: ', json.errors)
  }

  const { data } = json

  return data
}
