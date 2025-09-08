"use client"
import {useRouter} from "next/navigation";
import styles from "./../../page.module.css";

export default function Loginteacher() {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <header>
                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About</a> |
                    <a href="/login">Login</a>
                </nav>
            </header>
            <div>
                <h1>Teacher Login Page</h1>
                <button onClick={()=>{router.push('/login')}}>Main Login</button>
                
            </div>
        </main>
      );
}