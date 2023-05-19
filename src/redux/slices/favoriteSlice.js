import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isFavorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const trueItem = state.items.find((obj) => obj.id === action.payload.id);
      if (!trueItem) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
    },
    remItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      const productId = action.payload;
      const index = state.isFavorite.indexOf(productId);
      if (index !== -1) {
        state.isFavorite.splice(index, 1);
      } else {
        state.isFavorite.push(productId);
      }
    },
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const index = state.isFavorite.indexOf(productId);
      if (index !== -1) {
        state.isFavorite.splice(index, 1);
      } else {
        state.isFavorite.push(productId);
      }
    },
  },
});

export const { addItem, toggleFavorite, remItem } = favoriteSlice.actions;

export default favoriteSlice.reducer;
