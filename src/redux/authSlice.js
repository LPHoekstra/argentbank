import { createSlice } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";

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
            userAPI.logout()
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
        }
    },
})

export const { connect, disconnect } = authSlice.actions
export const authReducer = authSlice.reducer