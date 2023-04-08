import axios from 'axios'
export const instance = axios.create({
	baseURL: 'https://api.punkapi.com/v2/',
})
