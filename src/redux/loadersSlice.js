import { createSlice } from "@reduxjs/toolkit";

const loadersSlice = createSlice({
    name: "loaders",
    initialState: {
        isLoading: false,
    },
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        notLoading: (state) => {
            state.isLoading = false
        }
    }
})

export const { loading, notLoading} = loadersSlice.actions
export const loadersReducer = loadersSlice.reducer