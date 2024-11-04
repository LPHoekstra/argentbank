import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isConnected: false,
    },
    reducers: {
        connected: (state) => {
            state.isConnected = true
        },
        notConnected: (state) => {
            state.isConnected = false
        }
    },
})


export const { connected, notConnected } = authSlice.actions
export const authReducer = authSlice.reducer