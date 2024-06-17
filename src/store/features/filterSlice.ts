import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

export interface IAuthState {
  isOpen: boolean
}

const initialState: IAuthState = {
  isOpen: true
}

export const filterSlice = createSlice ({
  name: 'filter',
  initialState,
  reducers: {
    openFilter: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  }
})

export const {openFilter} = filterSlice.actions

export default filterSlice.reducer
