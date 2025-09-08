"use client";
import { useRouter } from "next/navigation";
export default function Aboutcollege() {
    const router = useRouter();
    return (
        <div>
            <h1>About College Page</h1>
            
            <button onClick={()=>{router.push("/");}}>Back to Home</button>
            <button onClick={()=>{router.push("/about");}}>Back to About</button>
        </div>
      );
}