"use client";
import { useRouter } from "next/navigation";
import styles from "./../page.module.css";

export default function Login() {
    const router = useRouter();
    const navigation = (p) => {
        router.push("/login/"+p);
    };
    return (
        <div>
            <div className="login-header">
                <h2>Login Page</h2>
            </div>
            <header>
                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About</a> |
                    <a href="/login">Login</a>
                </nav>
            </header>
            <div>
                <h1>Login body</h1>
                <button onClick={()=>{navigation('studentlogin')}}>Student Login</button>
                <button onClick={()=>{navigation('teacherlogin')}}>Teacher Login</button>
            </div>
        </div>
      );
}