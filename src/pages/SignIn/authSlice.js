import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isConnected: false,
    },
    reducers: {
        connected: (state, user, token) => {
            state.isConnected = true
            state.user = user
            localStorage.setItem("token", token)
        },
        notConnected: (state) => {
            state.isConnected = false
        }
    },
})


export const { connected, notConnected } = authSlice.actions
export const authReducer = authSlice.reducer