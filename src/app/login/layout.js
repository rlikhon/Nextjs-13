import "./login.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-menu">
        <li><h2>Login Nav</h2></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/login/studentlogin">Student Login</a></li>
        <li><a href="/login/teacherlogin">Teacher Login</a></li>
      </ul>
      {children}
    </div>
  );
}
