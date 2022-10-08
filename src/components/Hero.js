import Layout from "./Layout"
import styles from "../styles/Hero.module.scss"

export default function HeroSection() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Early Childhood Intervention </h1>
                    <h2>For Children with ASD</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus minus, earum voluptates dignissimos hic vitae impedit asperiores incidunt accusamus.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </Layout>
    )
}
