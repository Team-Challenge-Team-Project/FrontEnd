import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import clothesService from 'src/services/clothes.service';
import { ClothesByFilters, ClothingItem } from 'src/services/types';

export interface IAuthState {
  clothesData: ClothingItem[];
  categoriesData: ClothingItem[];
}

const initialState: IAuthState = {
  clothesData: [],
  categoriesData: [],
};

export const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setClothes: (state, action) => {
      state.clothesData = action.payload;
    },
    setCategories: (state, action) => {
      state.categoriesData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClothes.fulfilled, () => {
      console.log('fulfilled');
    });
  },
});

export const { setClothes } = clothesSlice.actions;
export default clothesSlice.reducer;

export const getClothes = createAsyncThunk(
  'clothes/getClothes',
  async (_, { dispatch }) => {
    const { content } = await clothesService.getAll();
    dispatch(setClothes(content));
  }
);

// export const getClothesByFilter = createAsyncThunk(
//   'clothes/getClothesByFilter',
//   async (data: ClothesByFilters, { dispatch }) => {
//     console.log(data);

//     const content = await clothesService.getClothesByFilters(data);
//     dispatch(setClothes(content));
//   }
// );
