
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setMessage("");

    if (fullName.trim().length < 2) {
      setMessage("Please enter your full name.");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Temporary demo registration; backend authentication comes later.
    const user = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
    };

    localStorage.setItem("careerLensRegisteredUser", JSON.stringify(user));

    navigate("/login", {
      state: { registered: true, email: user.email },
    });
  };

  return (
    <main className="register-page">
      <section className="register-card">
        <Link to="/" className="register-brand">
          <span className="register-logo">CL</span>
          <span>CareerLens</span>
        </Link>

        <div className="register-heading">
          <p className="register-label">START YOUR JOURNEY</p>
          <h1>Create your account</h1>
          <p>
            Take the first step toward understanding your skills
            and building your future.
          </p>
        </div>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-form-group">
            <label htmlFor="register-name">Full name</label>
            <input
              id="register-name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
              minLength={2}
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="register-form-group">
            <label htmlFor="register-password">Password</label>
            <div className="register-password-wrap">
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={8}
                required
              />
              <button
                type="button"
                className="register-show-password"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="register-form-group">
            <label htmlFor="register-confirm-password">
              Confirm password
            </label>
            <input
              id="register-confirm-password"
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {message && (
            <p className="register-message" role="alert">
              {message}
            </p>
          )}

          <button type="submit" className="register-submit-button">
            Create Account <span>→</span>
          </button>
        </form>

        <p className="register-login-text">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>

        <button
          type="button"
          className="register-back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <p className="register-disclaimer">
          Demo registration only. Secure account creation will be
          implemented with the backend.
        </p>
      </section>
    </main>
  );
}

export default Register;
