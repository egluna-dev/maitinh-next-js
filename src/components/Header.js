import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Header.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <nav className={styles.navbar} id='navbar-left'>
                    <ul>
                        <li><Link href='/about'><a>About</a></Link></li>
                        <li><Link href='/services'><a>Services &amp; Support</a></Link></li>
                        <li><Link href='/pricing'><a>Pricing</a></Link></li>
                        <li><Link href='/'><a>Contact</a></Link></li>
                    </ul>
                </nav>
                <Image src='/logos/MaiTinhSimplifiedColor.png' height={80} width={70} alt='M|T' />
                <nav className={styles.navbar} id='navbar-right'>
                    <ul>
                        <li><Link href='#!'><a>&#40;&#x2b;61&#41;</a></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
