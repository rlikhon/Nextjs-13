"use client";
import styles from "./../../page.module.css";
import { useRouter } from "next/navigation";

export default function Loginstudent() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <header>
        <nav>
          <a href="/">Home</a> |<a href="/about">About</a> |
          <a href="/login">Login</a>
        </nav>
      </header>

      <div>
        <h1>Student Login Page</h1>
        <button
          onClick={() => {
            router.push("/login");
          }}
        >
          Main Login
        </button>
      </div>
    </main>
  );
}
