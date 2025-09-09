'use client';
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const apple = (f) => {
    alert(f);
  }
  return (
    <main className={styles.main}>
      <header>
        <nav>
          <Link href="/" >Home</Link> |
          <Link href="/about">About</Link> |
          <Link href="/login">Login</Link> |
          <Link href="/studentlist">Student List</Link> |
          <Link href="/productlist">Product List</Link> |
          <Link href="/allproducts">All Product</Link>
        </nav>
      </header>
      <h1>Home Page</h1>
      <User name="Likhon" />
      <button onClick={()=>{apple('banana')}}>Click Me</button>
    </main>
  );
}

const User = (props) => {
  return <div>User name is {props.name}</div>;
}