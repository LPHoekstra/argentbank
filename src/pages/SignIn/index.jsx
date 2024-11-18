import { useState } from "react"
import m from "./index.module.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { connected } from "../../redux/authSlice"
import userAPI from "../../api/userAPI"
import InputWrapper from "../../components/InputWrapper"
import { loading, notLoading } from "../../redux/loadersSlice"
import { setError } from "../../redux/errorSlice"

function SignIn() {
  const navigate = useNavigate()
  const error = useSelector((state) => state.error.errorMsg)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      dispatch(loading())

      const formObject = {
        "email": email,
        "password": password,
      }

      const jsonData = JSON.stringify(formObject)

      const data = await userAPI.signin(jsonData)

      dispatch(connected(email))
      localStorage.setItem("token", data.body.token)

      dispatch(notLoading())
      navigate("/profile", { replace: true})
    } catch (error) {
      console.error(error)
      dispatch(notLoading())

      dispatch(setError(error.message))
    }
  }

  return (
    <main className="main bg-dark">
      <section className={m.signIn__content}>
        <i className={`fa fa-user-circle ${m.signIn__icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <InputWrapper
            type="text"
            id="username"
            onChange={setEmail}
            autocomplete="email"
            text="Email"
          />
          <InputWrapper
            type="password"
            id="password"
            onChange={setPassword}
            autocomplete="current-password"
            text="Password"
          />
          <div className={m.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={m.signIn__btn}>Sign In</button>
          {error ?
            <span className="error-msg">{error}</span>
            :
            null
          }
        </form>
      </section>
    </main>
  )
}

export default SignIn