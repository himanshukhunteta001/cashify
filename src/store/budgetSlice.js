import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, plannedAmount, actualAmount } = action.payload;
      if (!state.items) {
        state.items = [];
      }
      state.items.push({
        name,
        plannedAmount,
        actualAmount
      });
    },
    loadItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, loadItems } = budgetSlice.actions;
export const selectItems = (state) => state.budget.items;
export default budgetSlice.reducer;
