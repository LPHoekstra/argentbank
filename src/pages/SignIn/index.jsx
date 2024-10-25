import m from "./index.module.scss"

function SignIn() {
  const setToken = (event) => {
    event.preventDefault()

    localStorage.setItem("token", "key")
  }

  return (
    <main className="main bg-dark">
      <section className={m.signIn__content}>
        <i className={`fa fa-user-circle ${m.signIn__icon}`}></i>
        <h1>Sign In</h1>
        <form method="post">
          <div className={m.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="email"/>
          </div>
          <div className={m.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={m.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
           <button className={m.signIn__btn} onClick={(event) => setToken(event)}>Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignIn