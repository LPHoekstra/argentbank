import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isConnected: false,
    },
    reducers: {
        connected: (state, action) => {
            state.isConnected = true
            state.user = action.payload
        },
        disconnect: (state) => {
            state.isConnected = false
            state.user = null
        }
    },
})


export const { connected, disconnect } = authSlice.actions
export const authReducer = authSlice.reducer