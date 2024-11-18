import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./authSlice.js"
import { userReducer } from "./userSlice.js"
import { errorReducer } from "./errorSlice.js"
import { loadersReducer } from "./loadersSlice.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        error: errorReducer,
        loaders: loadersReducer,
    }
})

export default store