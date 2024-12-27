import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isConnected: false,
    },
    reducers: {
        connected: (state, action) => {
            state.isConnected = true
            action.payload && localStorage.setItem("token", action.payload)
        },
        disconnect: (state) => {
            state.isConnected = false
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
        }
    },
})


export const { connected, disconnect } = authSlice.actions
export const authReducer = authSlice.reducer