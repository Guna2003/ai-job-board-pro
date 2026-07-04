import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === login.email.toLowerCase() &&
        user.password === login.password
    );

    if (foundUser) {
      // Save current logged-in user
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      // Save login status
      localStorage.setItem("loggedIn", "true");

      alert(`Welcome ${foundUser.name}!`);

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Welcome Back</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;