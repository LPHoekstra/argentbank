import { useNavigate } from "react-router-dom"
import userAPI from "../../api/userAPI"
import FormHandler from "../../components/FormHandler"

function SignUpForm() {
    const navigate = useNavigate()

    // add a input validation
    const handleSubmit = async (data) => {
        const jsonData = JSON.stringify(data)
        await userAPI.signUp(jsonData)

        navigate("/signin", { replace: true })
    }

    return (
        <FormHandler
            field={[
                {type: "username"},
                {type: "firstname"},
                {type: "lastname"},
                {type: "email"},
                {type: "password"}
            ]}
            submit={handleSubmit}
            buttons={[
                {text: "Sign Up"}
            ]}
            additionalClass={{}}
        />
    )
}

export default SignUpForm