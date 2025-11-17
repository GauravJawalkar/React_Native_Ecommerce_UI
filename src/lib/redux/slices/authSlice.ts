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
        },
        logout: (state, action) => {
            state.user = { id: Math.random() * 1000, name: "", password: "" };
            state.isLoggedIn = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;