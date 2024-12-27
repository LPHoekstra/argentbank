import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        firstName: null,
        lastName: null,
        userName: null,
        id: null
    },
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.userName = action.payload.userName
            state.id = action.payload.id
            localStorage.setItem("userName", action.payload.userName)
        },
        removeUser: (state) => {
            state.email = null
            state.firstName = null
            state.lastName = null
            state.userName = null
            state.id = null
            localStorage.removeItem("userName")
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export const userReducer = userSlice.reducer