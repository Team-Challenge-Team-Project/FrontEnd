import axios, { AxiosRequestConfig } from 'axios'

class ClothesService {
  token: string
  config: AxiosRequestConfig

  constructor () {
    this.config = {
      baseURL: 'https://dev.worldmandia.cc/api/v1/'
    }
  }

  getAll () {
    return axios.get ('/public/clothes', this.config).catch ((error) => {
      return { ...error.response, catch: true }
    })
  }
}

export default new ClothesService ()