import m from "./index.module.scss"
import SignInForm from "../../containers/SignInForm"
import { Link } from "react-router-dom"

function SignIn() {

  return (
    <main className="main bg-dark">
      <section className={m.signIn__content}>
        <i className={`fa fa-user-circle ${m.signIn__icon}`}></i>
        <h1>Sign In</h1>
        <SignInForm />
        <Link className={m.signIn__link} to="/signup">Sign Up</Link>
      </section>
    </main>
  )
}

export default SignIn