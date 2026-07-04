import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    alert("Logged out successfully!");

    navigate("/login");
  }

  return (
    <nav className="navbar">
      <h2 className="logo">Techie Job Board</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#jobs">Jobs</a></li>
      </ul>

      <div className="nav-right">
        {loggedIn ? (
          <>
            <span className="welcome-user">
              👋 Welcome, {currentUser?.name}
            </span>

            <Link to="/applications">
              <button className="login-btn">
                My Applications
              </button>
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;