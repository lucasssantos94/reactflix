import { tmdb } from '@app/api/tmdb'
import { AxiosError } from 'axios'

export async function getSerieDetails(serieId: string) {
  try {
    const response = await tmdb.get(`/tv/${serieId}`, {
      params: {
        append_to_response:
          'credits,reviews,recommendations,keywords,watch/providers,external_ids',
      },
    })

    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error(`Série com ID ${serieId} não encontrada`)
      } else if (error.response?.status === 401) {
        throw new Error('Chave da API inválida ou expirada')
      } else if (error.response?.status === 429) {
        throw new Error('Limite de requisições excedido')
      }
    }

    throw new Error(
      `Erro ao buscar série: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
    )
  }
}
