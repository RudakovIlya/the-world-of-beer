import {instance} from "../../services/api";
import {BeerQuery, BeerResponse} from "./beer.types";

export const beersService = {
  getBeerList: (params: BeerQuery) => {
    return instance.get<BeerResponse[]>('beers', {
      params
    })
  },
}
