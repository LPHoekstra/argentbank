import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        id: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user
            state.id = action.payload.id
        },
        removeUser: (state) => {
            state.user = null
            state.id = null
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export const userReducer = userSlice.reducer