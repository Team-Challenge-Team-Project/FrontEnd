import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../../services/auth.service'

const initialState = {
  token: localStorage.getItem ('token') || null,
  authModalCanOpen: true
}

export const signInRequest = createAsyncThunk (
  'auth/signIn',
  async (props: { email: string; password: string }, { dispatch }) => {
    try {
      const res = await authService.login (props)
      if (res) {
        dispatch (setSignIn (res))
      }
    } catch (error) {
      console.error ('Registration failed:', error)
    }
  }
)


export const signUpRequest = createAsyncThunk (
  'auth/signUp',
  async (props: { mail: string; password: string }, { dispatch }) => {
    try {
      const res = await authService.register (props)
      if (res) {
        dispatch (setSignUp (res))
      }
    } catch (error) {
      console.error ('Registration failed:', error)
    }
  }
)

// export logOut =

export const authSlice = createSlice ({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      localStorage.setItem ('token', action.payload)
      state.token = action.payload
      state.authModalCanOpen = false
    },
    setSignUp: (state, action) => {
      localStorage.setItem ('token', action.payload)
      state.token = action.payload
      state.authModalCanOpen = false
    },
    logOut: (state) => {
      state.token = null
      state.authModalCanOpen = true
      localStorage.removeItem ('token')
    }
  }
})

export const { setSignIn, setSignUp, logOut } = authSlice.actions
export default authSlice.reducer
