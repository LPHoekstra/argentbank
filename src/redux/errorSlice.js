import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: {
        isError: null,
        errorMsg: null,
    },
    reducers: {
        setError: (state, action) => {
            state.isError = true
            state.errorMsg = action.payload
        }
    }
})

export const { setError } = errorSlice.actions
export const errorReducer = errorSlice.reducer