import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import clothesService from '../../api/clothesService'

export interface IAuthState {
  clothesData: [];
}

const initialState: IAuthState = {
  clothesData: []
}

export const getClothes = createAsyncThunk (
  'clothes/getClothes',
  async (_, { dispatch }) => {
    const res = await clothesService.getAll ()
    console.log (res.data.content)
    dispatch (setClothes (res.data.content))
  })


export const clothesSlice = createSlice ({
  name: 'clothes',
  initialState,
  reducers: {
    setClothes: (state, action) => {
      state.clothesData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase (getClothes.fulfilled, () => {
      console.log ('fulfilled')
    })
  }
})

export const { setClothes } = clothesSlice.actions

export default clothesSlice.reducer
