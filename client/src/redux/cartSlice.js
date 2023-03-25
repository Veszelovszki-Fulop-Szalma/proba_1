import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartValue: {
        username: '',
        portfolio: [],
    },
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        feltolt: (state, action) => {
            state.cartValue.portfolio = action.payload.portfolio;
        },
    },
});

// Action creators are generated for each case reducer function
export const { feltolt } = cartSlice.actions;

export default cartSlice.reducer;
