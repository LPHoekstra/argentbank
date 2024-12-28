import { useNavigate } from "react-router-dom"
import userAPI from "../../api/userAPI"
import FormHandler from "../../components/FormHandler"
import { useDispatch } from "react-redux"
import { removeError } from "../../redux/errorSlice"

function SignUpForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // add a input validation
    const handleSubmit = async (data) => {
        const jsonData = JSON.stringify(data)
        await userAPI.signUp(jsonData)

        dispatch(removeError())
        navigate("/login", { replace: true })
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