import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: Math.random() * 1000,
        name: "",
        password: "",
    },
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
})

export const { login } = authSlice.actions;
export default authSlice.reducer;