import { instance } from '../../services/api'
import { type BeerQuery, type BeerResponse } from './beer.types'

export const beersService = {
  getBeerList: (params: BeerQuery) => {
    return instance.get<BeerResponse[]>('beers', {
      params
    })
  }
}
