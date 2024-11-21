import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isConnected: false,
    },
    reducers: {
        connected: (state) => {
            state.isConnected = true
        },
        disconnect: (state) => {
            state.isConnected = false
        }
    },
})


export const { connected, disconnect } = authSlice.actions
export const authReducer = authSlice.reducer