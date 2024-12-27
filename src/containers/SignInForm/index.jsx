import { useDispatch } from "react-redux"
import { connect } from "../../redux/authSlice"
import { useNavigate } from "react-router-dom"
import userAPI from "../../api/userAPI"
import FormHandler from "../../components/FormHandler"
import m from "./index.module.scss"

function SignInForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (data) => {
        const jsonData = JSON.stringify(data)
        const response = await userAPI.signin(jsonData)

        dispatch(connect(response.body.token))
        navigate("/profile", { replace: true })
    }

    return (
        <FormHandler
            field={[
                { type: "email" },
                { type: "password" }
            ]}
            submit={handleSubmit}
            buttons={[
                { text: "Sign In" }
            ]}
            additionalContent={
                <div className={m.inputRemember}>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            }
            additionalClass={
                {
                    button: m.form__btn
                }
            }
        />
    )
}

export default SignInForm