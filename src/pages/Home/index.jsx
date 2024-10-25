import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"
import m from "./index.module.scss"

function Home() {
    return (
        <main>
            <div className={m.hero}>
                <section className={m.hero__content}>
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className={m.hero__subtitle}>No fees.</p>
                    <p className={m.hero__subtitle}>No minimum deposit.</p>
                    <p className={m.hero__subtitle}>High interest rates.</p>
                    <p className={m.hero__text}>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className={m.features}>
                <h2 className="sr-only">Features</h2>
                <div className={m.features__item}>
                    <img src={iconChat} alt="Chat Icon" className={m.features__icon} />
                    <h3 className={m.features__itemTitle}>You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className={m.features__item}>
                    <img
                        src={iconMoney}
                        alt="Money Icon"
                        className={m.features__icon}
                    />
                    <h3 className={m.features__itemTitle}>More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className={m.features__item}>
                    <img
                        src={iconSecurity}
                        alt="Security Icon"
                        className={m.features__icon}
                    />
                    <h3 className={m.features__itemTitle}>Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home