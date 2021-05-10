// styles
import styles from "./nav.module.css"

// imported components
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

// custom components

export default function NavigationBar() {
    return (
        <Navbar className={styles.navbar}>
            <Navbar.Brand className={styles.navLink}>Med Connect</Navbar.Brand>
            <Link href="/">
                <span className={styles.navLink}>Home</span>
            </Link>
            <Link href="/medicalStudents">
                <span className={styles.navLink}>Medical Students</span>
            </Link>
            <Link href="/residents">
                <span className={styles.navLink}>Residents</span>
            </Link>
            <Link href="/login">
                <span className={styles.navLink}>Login</span>
            </Link>
            <Link href="/contact">
                <span className={styles.navLink}>Contact Us</span>
            </Link>
        </Navbar>
    );
}
