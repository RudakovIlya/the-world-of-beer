import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {persist} from 'zustand/middleware'
import {beersService} from './beers.services'
import {type BeerResponse} from './beer.types'
import {errorUtils} from '../../common/utils/error-utils'

interface BeerListState {
  status: 'idle' | 'loading' | 'success' | 'failed'
  errorMessage: string
  beers: BeerResponse[]
  currentBeer: BeerResponse
  favorites: BeerResponse[]
  currentPage: number
  setBeerList: () => void
  setCurrentBeer: (data: BeerResponse) => void
  changeCurrentPage: (page: number) => void
  addFavorite: () => void
  removeFavorite: (id: number) => void
}

export const useBeerList = create(persist(immer<BeerListState>((set, getState) => ({
  beers: [],
  status: 'idle',
  errorMessage: '',
  currentPage: 1,
  currentBeer: {} as BeerResponse,
  favorites: [],
  setBeerList: async () => {
    const currentPage = getState().currentPage
    set(state => {
      state.status = 'loading'
    })
    try {
      const response = await beersService.getBeerList({page: currentPage, per_page: 5})
      set(state => {
        state.beers = response.data
        state.status = 'success'
      })
    } catch (e) {
      const error = errorUtils(e)
      set(state => {
        state.status = 'failed'
        state.errorMessage = error
      })
    }
  },
  setCurrentBeer: (data: BeerResponse) => {
    set((state) => {
      state.currentBeer = data
    })
  },
  changeCurrentPage: (page) => {
    set(state => {
      state.currentPage = page
    })
  },
  addFavorite: () => {
    const favorite = getState().favorites.find(item => item.id === getState().currentBeer.id)
    set(state => {
      if (!favorite) {
        state.favorites.push(state.currentBeer)
      }
    })
  },
  removeFavorite: (id) => {
    set((state) => {
      const index = state.favorites.findIndex(item => item.id === id)
      index >= 0 && state.favorites.splice(index, 1)
    })
  }
})), {
  name: 'beer-list',
  partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => ['favorites'].includes(key)))
}))
