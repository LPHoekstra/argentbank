import FeatureItem from "../../components/FeatureItem"
import m from "./index.module.scss"
import iconChat from "../../assets/img/icon-chat-opti.png"
import iconMoney from "../../assets/img/icon-money-opti.png"
import iconSecurity from "../../assets/img/icon-security-opti.png"

const features = [
    {
        title: "You are our #1 priority",
        icon: iconChat,
        iconAlt: "Chat icon",
        content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        title: "More savings means higher rates",
        icon: iconMoney,
        iconAlt: "Money Icon",
        content: "The more you save with us, the higher your interest rate will be!"
    },
    {
        title: "Security you can trust",
        icon: iconSecurity,
        iconAlt: "Security icon",
        content: "We use top of the line encryption to make sure your data and money is always safe."
    },
];

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
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                ))}
            </section>
        </main>
    )
}

export default Home