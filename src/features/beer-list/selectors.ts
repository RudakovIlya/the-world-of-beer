import {BeerListState} from "./store";

export const fetchBeerListSelector = (state: BeerListState) => state.setBeerList
export const currentPageSelector = (state: BeerListState) => state.currentPage
export const fetchStatusSelector = (state: BeerListState) => state.status
export const errorMessageSelector = (state: BeerListState) => state.errorMessage
export const changeCurrentPageSelector = (state: BeerListState) => state.changeCurrentPage
export const favoritesSelector = (state: BeerListState) => state.favorites
export const removeFavoriteSelector = (state: BeerListState) => state.removeFavorite