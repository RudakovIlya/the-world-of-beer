import {BeerState} from "./store";

export const statusSelector = (state: BeerState) => state.status
export const errorMessageSelector = (state: BeerState) => state.errorMessage
export const beerSelector = (state: BeerState) => state.beer
export const getBeerSelector = (state: BeerState) => state.getBeer