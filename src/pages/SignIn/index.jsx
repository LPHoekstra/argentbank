import m from "./index.module.scss"
import SignInForm from "../../containers/SignInForm"

function SignIn() {

  return (
    <main className="main bg-dark">
      <section className={m.signIn__content}>
        <i className={`fa fa-user-circle ${m.signIn__icon}`}></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  )
}

export default SignIn