import m from "./index.module.scss"

function BankAccount({ amount, description, title }) {
    return (
        <section className={m.account}>
            <div className={m.account__contentWrapper}>
                <h3 className={m.account__title}>{title}</h3>
                <p className={m.account__amount}>{amount}</p>
                <p>{description}</p>
            </div>
            <div className={`${m.account__contentWrapper} cta`}>
                <button className={`button ${m.account__transactionButton}`}>View transactions</button>
            </div>
        </section>
    )
}

export default BankAccount