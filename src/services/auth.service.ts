import httpService from './http.service'
import { ApiResponse, UserRegisterResponse } from './types'


const userAuthRegisterEndpoint = '/public/auth/register'
const userAuthLoginEndpoint = '/public/auth/login'


const authService = {
  register: async (props) => {
    const mail = props.email
    const password = props.password
    try {
      const response = await httpService.post<ApiResponse<UserRegisterResponse>> (
        userAuthRegisterEndpoint,
        {
          mail,
          password
        }
      )
      return response.data
    } catch (error) {
      console.error ('Error fetching clothes:', error)
      throw error
    }
  },
  login: async (props) => {
    const mail = props.email
    const password = props.password
    try {
      const response = await httpService.post<ApiResponse<UserRegisterResponse>> (
        userAuthLoginEndpoint,
        {
          mail,
          password
        }
      )
      return response.data
    } catch (error) {
      console.error ('Error fetching clothes:', error)
      throw error
    }
  },
  refresh: () => {
  }
}
export default authService

