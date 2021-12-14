import { createSlice, current } from '@reduxjs/toolkit';


const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoryList: [],
    activeCategory: 'all',
  },
  reducers: {
    selectCategory(state, action) {
      if(action.payload.name === 'all') {
        state.activeCategory = initialState;
      } 
      else if(current(state).categoryList.includes(action.payload)) {
        state.activeCategory = action.payload;
      }
    },
    getCategories(state, action) {
      state.categoryList = state.categoryList.concat(action.payload);
    },
  }
});

export const { selectCategory, getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;