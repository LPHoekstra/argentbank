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
}

export default userAPI