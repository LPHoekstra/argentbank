import m from "./index.module.scss"

function User() {
    return (
        <main className="main bg-dark">
            <div className={m.header}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={m.editButton}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className={m.account}>
                <div className={m.account__contentWrapper}>
                    <h3 className={m.account__title}>Argent Bank Checking (x8349)</h3>
                    <p className={m.account__amount}>$2,082.79</p>
                    <p className={m.account__amount__description}>Available Balance</p>
                </div>
                <div className={`${m.account__contentWrapper} cta`}>
                    <button className={m.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={m.account}>
                <div className={m.account__contentWrapper}>
                    <h3 className={m.account__title}>Argent Bank Savings (x6712)</h3>
                    <p className={m.account__amount}>$10,928.42</p>
                    <p className={m.account__amount__description}>Available Balance</p>
                </div>
                <div className={`${m.account__contentWrapper} cta`}>
                    <button className={m.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={m.account}>
                <div className={m.account__contentWrapper}>
                    <h3 className={m.account__title}>Argent Bank Credit Card (x8349)</h3>
                    <p className={m.account__amount}>$184.30</p>
                    <p className={m.account__amount__description}>Current Balance</p>
                </div>
                <div className={`${m.account__contentWrapper} cta`}>
                    <button className={m.transactionButton}>View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default User