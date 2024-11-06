import { useState } from "react"
import m from "./index.module.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { connected } from "../../redux/authSlice"
import userAPI from "../../api/userAPI"
import Loaders from "../../components/Loaders"

function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState(useSelector((state) => state.error.errorMsg))
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true)

      const formData = new FormData()
      formData.append("email", email)
      formData.append("password", password)

      const formDataObject = Object.fromEntries(formData.entries())

      const jsonData = JSON.stringify(formDataObject)

      const data = await userAPI.signin(jsonData)

      dispatch(connected(email))
      localStorage.setItem("token", data.body.token)

      navigate("/user")
    } catch (error) {
      console.error(error)
      setLoading(false)

      setError(error.message)
    }
  }

  return (
    <main className="main bg-dark">
      <section className={m.signIn__content}>
        <i className={`fa fa-user-circle ${m.signIn__icon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={m.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className={m.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className={m.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={m.signIn__btn}>Sign In</button>
          {loading ? <Loaders /> : null}
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