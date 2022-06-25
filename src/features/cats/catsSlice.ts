import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios'


export interface CatsState {
  loading: boolean,
  categoryId: number
  category: Array<{id: number, name: string}> | [],
  catsData: any,
}

const initialState: CatsState = {
  loading: false,
  categoryId: 1,
  category: [],
  catsData: []
};

export const getCotegoryCats = createAsyncThunk(
  'cats/category',
  async (id: number) => {
    const response = await axios(`https://api.thecatapi.com/v${id}/categories`);
    return response.data;
  }
);

export const getCatData = createAsyncThunk(
  'cats/data',
  async (payload: { limit: number, id: number }) => {
    const response = await axios(`https://api.thecatapi.com/v1/images/search?limit=${payload.limit}&page=&category_ids=${payload.id} `);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    changeCategoryId: (state, action) => {
      state.categoryId = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCotegoryCats.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCotegoryCats.fulfilled, (state, action) => {
        state.category = action.payload
        state.loading = false;
      })
      .addCase(getCotegoryCats.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(getCatData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCatData.fulfilled, (state, action) => {
        state.catsData = action.payload
        state.loading = false;
      })
      .addCase(getCatData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { changeCategoryId } = counterSlice.actions

export const selectCatCategory = (state: RootState) => state.cats.category;
export const selectCatData = (state: RootState) => state.cats.catsData;
export const selectLoading = (state: RootState) => state.cats.loading;
export const selectCategoryId = (state: RootState) => state.cats.categoryId;

export default counterSlice.reducer;
