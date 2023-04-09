import {instance} from "../../services/api";
import {BeerQuery} from "./beer.types";

export const beersService = {
  getBeerList: (params: BeerQuery) => {
    return instance.get('beers', {
      params
    })
  },
}
