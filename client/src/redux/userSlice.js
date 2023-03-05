import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userValue: {
        username: '',
        password: '',
        isLoggedIn: false,
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginData: (state, action) => {
            state.userValue.username = action.payload.username;
            state.userValue.password = action.payload.password;
        },
        valt: (state) => {
            state.userValue.isLoggedIn = !state.userValue.isLoggedIn;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loginData, valt } = userSlice.actions;

export default userSlice.reducer;
