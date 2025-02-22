const URL = "http://localhost:3001/api/v1"

/**
 * 
 * @param {"endpoint of the api"} endpoint 
 * @param {*} param1 
 * @returns 
 */
const apiClient = async (endpoint, {method = "GET", headers = {}, body } = {}) => {
    const token = localStorage.getItem("token")

    const config = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
            ...(token && { Authorization: `Bearer ${token}`})
        },
    }

    if (body) {
        config.body = body
    }

    try {
        const response = await fetch(`${URL}${endpoint}`, config)

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Token d'authentification invalide")
            }
            if (response.status === 400) {
                throw new Error("Email ou mot de passe invalide")
            }

            throw new Error("Erreur serveur")
        }

        return await response.json()
    } catch(error) {
        console.error(error)
        
        throw error
    }
}

export default apiClient