"use client";
import { useRouter } from "next/navigation";
import styles from "./../page.module.css";

export default function About() {
  const router = useRouter();

  const handleRouter = (p) => {
    router.push("/about/"+p);
  };

  return (
    <main className={styles.main}>
      <header>
        <nav>
          <a href="/">Home</a> |<a href="/about">About</a> |
          <a href="/login">Login</a>
        </nav>
      </header>
      <div>
        <h1>About Page</h1>
        <button onClick={()=>{router.push("/about/aboutstudent")}}>About Student</button>
        <button onClick={()=>{router.push("/about/aboutcollege")}}>About College</button>
      </div>
    </main>
  );
}
