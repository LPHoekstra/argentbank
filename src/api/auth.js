import apiClient from "./api.js"

const authAPI = {
    signin: async (data) => {
        return await apiClient("/user/login", {
            method: "POST",
            body: data
        })
    }
}

export default authAPI