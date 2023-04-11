import { instance } from '../../services/api'
import { type BeerResponse } from '../beer-list/beer.types'

export const beerService = {
  getBeer: (id: number) => {
    return instance.get<BeerResponse[]>(`beers/${id}`)
  }
}
