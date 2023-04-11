import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {type BeerResponse} from '../beer-list/beer.types'
import {beerService} from './details.services'
import {errorUtils} from '../../common/utils/error-utils'

export interface BeerState {
  status: 'idle' | 'loading' | 'success' | 'failed'
  errorMessage: string
  beer: BeerResponse
  getBeer: (id: number) => void
}

export const useBeer = create(immer<BeerState>((set) => ({
  beer: {} as BeerResponse,
  status: 'idle',
  errorMessage: '',
  getBeer: async (id) => {
    set((state) => {
      state.status = 'loading'
    })
    try {
      const response = await beerService.getBeer(id)
      set((state) => {
        state.beer = response.data[0]
        state.status = 'success'
      })
    } catch (e) {
      const error = errorUtils(e)
      set((state) => {
        state.errorMessage = error
        state.status = 'failed'
      })
    }
  }
})))
