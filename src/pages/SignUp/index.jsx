import m from "./index.module.scss"
import SignUpForm from "./../../containers/SignUpForm"

function SignUp() {
    return (
        <main className="main bg-dark">
            <section className={m.signIn__content}>
                <i className={`fa fa-user-circle ${m.signIn__icon}`}></i>
                <h1>Sign Up</h1>
                <SignUpForm />
            </section>
        </main>
    )
}

export default SignUp