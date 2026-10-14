
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

import CareerSelection from "./pages/CareerSelection";
import SkillAssessment from "./pages/SkillAssessment";
import SkillGap from "./pages/SkillGap";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="home-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">CL</span>
          <span>CareerLens</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/dashboard">Dashboard</Link>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            title="Toggle light and dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link to="/login" className="login-nav-button">
            Login
          </Link>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✦</span> YOUR CAREER, YOUR FUTURE
            </div>

            <h1>
              Build Your Career
              <br />
              With <span>Confidence.</span>
            </h1>

            <p className="hero-description">
              Discover your ideal career, assess your skills,
              identify skill gaps, and create a clear path
              toward your professional goals.
            </p>

            <div className="hero-buttons">
              <Link to="/careers" className="primary-button">
                Explore Careers <span>→</span>
              </Link>

              <Link to="/dashboard" className="secondary-button">
                View Dashboard
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span>🎓</span>
                <span>💻</span>
                <span>🚀</span>
              </div>

              <p>
                <strong>One step at a time.</strong>
                <br />
                Build skills for the career you want.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="career-preview-card">
              <div className="preview-top">
                <div>
                  <span className="preview-label">
                    YOUR CAREER JOURNEY
                  </span>
                  <h3>Progress Overview</h3>
                </div>
                <span className="preview-icon">📈</span>
              </div>

              <div className="preview-score">
                <div>
                  <span className="score-number">01</span>
                  <span className="score-caption">Choose a career</span>
                </div>
                <span className="preview-check">✓</span>
              </div>

              <div className="preview-progress-track">
                <div className="preview-progress-fill"></div>
              </div>

              <div className="preview-stat-grid">
                <div className="preview-stat">
                  <span>🎯</span>
                  <strong>20</strong>
                  <small>Career paths</small>
                </div>

                <div className="preview-stat">
                  <span>🧠</span>
                  <strong>Skills</strong>
                  <small>Self-assessment</small>
                </div>
              </div>

              <div className="preview-note">
                <span>💡</span>
                <p>
                  Your next opportunity starts with
                  understanding your skills.
                </p>
              </div>
            </div>

            <div className="floating-chip chip-one">
              <span>✨</span> Discover your strengths
            </div>

            <div className="floating-chip chip-two">
              <span>🚀</span> Plan your next step
            </div>
          </div>
        </section>

        <section className="features-section" id="about">
          <div className="section-heading">
            <p className="section-label">THE CAREERLENS ADVANTAGE</p>
            <h2>Turn career confusion into clarity.</h2>
            <p>
              Everything you need to understand where you are
              and plan where you want to go.
            </p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon purple">🧭</div>
              <h3>Explore Careers</h3>
              <p>
                Discover career paths and explore the skills
                required for each role.
              </p>
              <Link to="/careers">Explore paths →</Link>
            </article>

            <article className="feature-card">
              <div className="feature-icon blue">🧠</div>
              <h3>Assess Your Skills</h3>
              <p>
                Select the skills you already know and
                understand your current strengths.
              </p>
              <Link to="/careers">Start assessment →</Link>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">📊</div>
              <h3>Find Skill Gaps</h3>
              <p>
                Identify skills to develop and receive
                practical learning recommendations.
              </p>
              <Link to="/careers">Analyze skills →</Link>
            </article>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <Link to="/" className="footer-brand">
          CareerLens
        </Link>
        <p>
          A clearer view of your skills. A stronger path to your future.
        </p>
        <span>© 2026 CareerLens</span>
      </footer>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("careerLensTheme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem(
      "careerLensTheme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route path="/careers" element={<CareerSelection />} />
        <Route path="/assessment" element={<SkillAssessment />} />
        <Route path="/skill-gap" element={<SkillGap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h1>Page not found</h1>
              <Link to="/">Return Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
