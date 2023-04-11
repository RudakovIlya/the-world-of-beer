export interface BeerQuery {
  page: number
  per_page: number
}

export interface BeerResponse {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

