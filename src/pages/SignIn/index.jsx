import { useState } from "react"
import m from "./index.module.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { connected } from "./authSlice"

function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      const formData = new FormData()
      formData.append("email", email)
      formData.append("password", password)

      const formDataObject = Object.fromEntries(formData.entries())

      const jsonData = JSON.stringify(formDataObject)

      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData
      })

      if (!response.ok) {
        throw new Error("Erreur au login")
      }

      const data = await response.json()

      dispatch(connected())
      localStorage.setItem("token", data.body.token)

      navigate("/user")
    } catch (error) {
      console.error(error)

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
          {error ?
            <span>{error}</span>
            :
            null
          }
        </form>
      </section>
    </main>
  )
}

export default SignIn