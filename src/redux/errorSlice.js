import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: {
        isError: false,
        errorMsg: null,
    },
    reducers: {
        setError: (state, action) => {
            state.isError = true
            state.errorMsg = action.payload
        },
        removeError: (state) => {
            if (state.isError) {
                state.isError = false
                state.errorMsg = null
            }
        }
    }
})

export const { setError, removeError } = errorSlice.actions
export const errorReducer = errorSlice.reducer