import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./authSlice.js"
import { userReducer } from "./userSlice.js"
import { errorReducer } from "./errorSlice.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        error: errorReducer,
    }
})

export default store