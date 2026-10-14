
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    // Temporary demo only; real authentication comes with the backend.
    localStorage.setItem("careerLensUser", email.trim());
    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <Link to="/" className="login-brand">
          <span className="login-logo">CL</span>
          <span>CareerLens</span>
        </Link>

        <div className="login-heading">
          <p className="login-label">WELCOME BACK</p>
          <h1>Sign in to your account</h1>
          <p>Continue your career journey and track your progress.</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <div className="login-password-wrap">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {message && (
            <p className="login-message" role="alert">
              {message}
            </p>
          )}

          <button type="submit" className="login-button">
            Sign In <span>→</span>
          </button>
        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <Link to="/register">Create an account</Link>
        </p>

        <button
          type="button"
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </section>
    </main>
  );
}

export default Login;
