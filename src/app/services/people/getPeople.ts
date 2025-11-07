import { tmdb } from '@/app/api/tmdb'

export async function getPeople(pageParam = 1) {
  const response = await tmdb.get('/person/popular', {
    params: {
      page: pageParam,
      sorty_by: 'popularity.desc',
    },
  })
  return response.data
}

export async function getPersonDetails(personId: string) {
  const response = await tmdb.get(`/person/${personId}`)
  console.log(response.data)
  return response.data
}
