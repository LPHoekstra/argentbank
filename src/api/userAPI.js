import apiClient from "./api.js"

const userAPI = {
    signin: async (data) => {
        return await apiClient("/user/login", {
            method: "POST",
            body: data
        })
    },
    getProfile: async () => {
        return await apiClient("/user/profile", {
            method: "GET",
        })
    },
    changeProfile: async (data) => {
        return await apiClient("/user/profile", {
            method: "PUT",
            body: data
        })
    },
    signUp: async (data) => {
        return await apiClient("/user/signup", {
            method: "POST",
            body: data
        })
    }
}

export default userAPI