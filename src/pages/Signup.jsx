import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find(
      (u) => u.email.toLowerCase() === user.email.toLowerCase()
    );

    if (existingUser) {
      alert("An account with this email already exists.");
      return;
    }

    // Save new user
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;