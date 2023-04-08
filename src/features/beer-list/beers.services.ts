import {instance} from "../../services/api";


export const beersService = {
  getBeerList: (params: { page: number, per_page: number }) => {
    return instance.get('beers', {
      params
    })
  },
}
