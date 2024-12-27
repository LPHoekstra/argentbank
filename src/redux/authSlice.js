import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isConnected: false,
    },
    reducers: {
        connect: (state, action) => {
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

export const { connect, disconnect } = authSlice.actions
export const authReducer = authSlice.reducer