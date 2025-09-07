import styles from "./home.module.css";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className={`container ${styles.hero}`}>
            <div className={styles.cta}>
                <h1 className={styles.title}>
                    Discover Everything You Need in One Place
                </h1>
                <p className={styles.desc}>
                    From daily essentials to unique finds, we make shopping
                    simple and enjoyable. Discover trusted products across
                    beauty, groceries, furniture, and more..
                </p>
                <Link className={styles.ctaBtn} to="/shop">
                    Start Shopping
                </Link>
            </div>

            <div className={styles.img}>
                <img src={reactLogo} alt="Shopping inspiration" />
            </div>
        </section>
    );
}
