import {create} from "zustand";
import {immer} from 'zustand/middleware/immer'
import {persist} from 'zustand/middleware'
import {beersService} from "./beers.services";

interface BeerListState {
  status: 'idle' | 'loading' | 'success' | 'failed'
  beers: any[]
  currentPage: number
  currentBeer: any
  setBeerList: (params: { page: number, per_page?: number }) => void
  changeCurrentPage: (page: number) => void
}

export const useBeerList = create(persist(immer<BeerListState>((set) => ({
  beers: [],
  status: 'idle',
  currentPage: 1,
  currentBeer: {},
  setBeerList: async ({page, per_page = 5}) => {
    set(state => {
      state.status = 'loading'
    })
    try {
      const response = await beersService.getBeerList({page, per_page})
      set(state => {
        state.beers = response.data
        state.status = 'success'
      })
    }finally {
      set(state => {
        state.status = 'idle'
      })
    }
  },
  changeCurrentPage: (page) => {
    set(state => {
      state.currentPage = page
    })
  }
})), {
  name: 'beer-list'
}))
// {
//   name: 'beer-list', partialize
// :
//   (state) =>
//       Object.fromEntries(
//           Object.entries(state).filter(([key]) => ['currentPage'].includes(key))
//       ),
// }