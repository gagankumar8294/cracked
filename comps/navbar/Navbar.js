import Link from "next/link"
import Image from "next/image"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_logo_border}>
                <Image className={styles.nav_logo}src="/black_logo.png" alt="codeaspirant-logo" width={83} height={80}/>
            </div>
            <div className={styles.nav_links_border}>
                <Link className={styles.nav_links} href="/">Home</Link>
                <Link className={styles.nav_links} href="/about">About</Link>
                <Link className={styles.nav_links} href="/blog">Blog</Link>
                <Link className={styles.nav_links} href="/videos">Videos</Link>
            </div>
            
        </nav>
    );
}

export default Navbar;