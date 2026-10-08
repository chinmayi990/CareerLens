import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import CareerSelection from "./pages/CareerSelection";
import SkillAssessment from "./pages/SkillAssessment";
import SkillGap from "./pages/SkillGap";
function Home() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">

        <div className="logo">
          Career<span>Lens</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
          <a href="#about">About</a>

          <button className="login-btn">
            Login
          </button>
        </div>

      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <p className="small-heading">
            YOUR CAREER. YOUR FUTURE.
          </p>

          <h1>
            Build Your Career
            <br />
            With <span>Confidence.</span>
          </h1>

          <p className="description">
            Discover your skills, identify your skill gaps,
            and get personalized guidance to move closer
            to your dream career.
          </p>

          <div className="hero-buttons">

            <Link to="/careers">
              <button className="primary-btn">
                Get Started
              </button>
            </Link>

            <Link to="/careers">
              <button className="secondary-btn">
                Explore Careers
              </button>
            </Link>

          </div>

        </div>


        {/* Career Progress Card */}
        <div className="hero-card">

          <div className="card-header">
            <h3>Career Progress</h3>
            <span>2026</span>
          </div>

          <div className="progress-item">

            <div className="progress-info">
              <span>Python</span>
              <span>85%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill python"></div>
            </div>

          </div>


          <div className="progress-item">

            <div className="progress-info">
              <span>SQL</span>
              <span>70%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill sql"></div>
            </div>

          </div>


          <div className="progress-item">

            <div className="progress-info">
              <span>Machine Learning</span>
              <span>45%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill ml"></div>
            </div>

          </div>


          <div className="skill-gap">

            <span>💡</span>

            <div>
              <strong>3 skills to improve</strong>
              <p>You're getting closer!</p>
            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features">

        <div className="section-title">

          <p>WHAT CAREERLENS OFFERS</p>

          <h2>
            Everything you need to
            <br />
            grow your career.
          </h2>

        </div>


        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon">
              🎯
            </div>

            <h3>Skill Gap Analysis</h3>

            <p>
              Understand which skills you already have
              and which skills you need to develop.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>Track Your Progress</h3>

            <p>
              Monitor your learning journey and
              visualize your career progress.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💼
            </div>

            <h3>Career Guidance</h3>

            <p>
              Explore career paths and discover
              what skills employers are looking for.
            </p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer id="about">

        <h3>CareerLens</h3>

        <p>
          Helping students build better careers.
        </p>

        <p className="copyright">
          © 2026 CareerLens. Built with React.
        </p>

      </footer>

    </div>
  );
}


function App() {

  return (

    <BrowserRouter>
    <Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/careers"
    element={<CareerSelection />}
  />

  <Route
    path="/assessment"
    element={<SkillAssessment />}
  />

  <Route
    path="/skill-gap"
    element={<SkillGap />}
  />

</Routes>
    </BrowserRouter>

  );
}

export default App;