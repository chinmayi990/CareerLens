
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();

  const {
    career = "Data Scientist",
    selectedSkills = [],
    missingSkills = [],
    readiness = 0,
  } = location.state || {};

  const safeSelectedSkills = Array.isArray(selectedSkills)
    ? selectedSkills
    : [];

  const safeMissingSkills = Array.isArray(missingSkills)
    ? missingSkills
    : [];

  const safeReadiness = Math.min(
    100,
    Math.max(0, Number(readiness) || 0)
  );

  const totalSkills =
    safeSelectedSkills.length + safeMissingSkills.length;

  const getReadinessLabel = () => {
    if (safeReadiness >= 80) return "Excellent progress";
    if (safeReadiness >= 60) return "You're getting there";
    if (safeReadiness >= 35) return "Building momentum";
    return "Your journey starts here";
  };

  const getReadinessMessage = () => {
    if (safeReadiness >= 80) {
      return "You're building a strong foundation for your chosen career. Keep refining your skills.";
    }

    if (safeReadiness >= 60) {
      return "You're making good progress. Focus on your remaining skill gaps to move forward.";
    }

    if (safeReadiness >= 35) {
      return "You have a foundation to build on. A consistent learning plan can help you improve.";
    }

    return "Start by learning the essential skills for your chosen career, one step at a time.";
  };

  return (
    <main className="dashboard-page">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-brand">
          <span className="dashboard-brand-icon">CL</span>
          <span>CareerLens</span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>

        <nav className="dashboard-navigation">
          <Link to="/dashboard" className="dashboard-nav-link active">
            <span className="nav-icon">▦</span>
            Overview
          </Link>

          <Link to="/careers" className="dashboard-nav-link">
            <span className="nav-icon">◎</span>
            Explore Careers
          </Link>

          <Link to="/careers" className="dashboard-nav-link">
            <span className="nav-icon">◈</span>
            Skill Assessment
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-tip-icon">✦</div>
          <h3>Small steps, big progress.</h3>
          <p>
            Keep learning and move closer to the career you want.
          </p>

          <Link to="/careers" className="sidebar-explore-link">
            Explore careers →
          </Link>

          <Link to="/" className="sidebar-home-link">
            ← Back to Home
          </Link>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-eyebrow">YOUR PERSONAL WORKSPACE</p>
            <h1>Career Dashboard</h1>
            <p className="dashboard-subtitle">
              Your progress, your skills, your next opportunity.
            </p>
          </div>

          <Link to="/careers" className="dashboard-header-button">
            + Explore Careers
          </Link>
        </header>

        <section className="dashboard-welcome">
          <div className="welcome-content">
            <span className="welcome-tag">YOUR CAREER JOURNEY</span>
            <h2>Turn your goals into progress.</h2>
            <p>
              Every skill you develop brings you closer to your
              professional future. Keep going!
            </p>

            <Link to="/careers" className="welcome-button">
              Continue Learning <span>→</span>
            </Link>
          </div>

          <div className="welcome-art" aria-hidden="true">
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-center">🚀</div>
            <span className="art-star star-one">✦</span>
            <span className="art-star star-two">✧</span>
            <span className="art-dot dot-one"></span>
            <span className="art-dot dot-two"></span>
          </div>
        </section>

        <div className="dashboard-section-heading">
          <div>
            <h2>Your overview</h2>
            <p>A snapshot of where you are right now.</p>
          </div>
        </div>

        <section className="dashboard-stats-grid">
          <article className="dashboard-stat-card">
            <div className="stat-card-top">
              <span className="stat-icon stat-purple">🎯</span>
              <span className="stat-caption">CAREER GOAL</span>
            </div>

            <h3 className="stat-career-name">{career}</h3>
            <p className="stat-description">
              Your selected career path
            </p>
          </article>

          <article className="dashboard-stat-card">
            <div className="stat-card-top">
              <span className="stat-icon stat-green">✓</span>
              <span className="stat-caption">SKILLS LEARNED</span>
            </div>

            <h3>{safeSelectedSkills.length}</h3>
            <p className="stat-description">
              Skills you have selected
            </p>
          </article>

          <article className="dashboard-stat-card">
            <div className="stat-card-top">
              <span className="stat-icon stat-orange">↗</span>
              <span className="stat-caption">SKILLS TO DEVELOP</span>
            </div>

            <h3>{safeMissingSkills.length}</h3>
            <p className="stat-description">
              Skills to focus on next
            </p>
          </article>

          <article className="dashboard-stat-card">
            <div className="stat-card-top">
              <span className="stat-icon stat-blue">◉</span>
              <span className="stat-caption">READINESS</span>
            </div>

            <h3>{safeReadiness}%</h3>
            <p className="stat-description">
              Based on your assessment
            </p>
          </article>
        </section>

        <section className="dashboard-content-grid">
          <article className="dashboard-panel readiness-panel">
            <div className="panel-heading">
              <div>
                <h2>Career readiness</h2>
                <p>Your current skill assessment</p>
              </div>

              <span className="panel-heading-icon">📈</span>
            </div>

            <div className="readiness-content">
              <div
                className="readiness-ring"
                style={{ "--progress": `${safeReadiness}%` }}
                role="img"
                aria-label={`Career readiness ${safeReadiness} percent`}
              >
                <div className="readiness-ring-inner">
                  <strong>{safeReadiness}%</strong>
                  <span>Ready</span>
                </div>
              </div>

              <div className="readiness-details">
                <span className="readiness-status">
                  {getReadinessLabel()}
                </span>

                <p>{getReadinessMessage()}</p>

                <div className="readiness-progress-track">
                  <div
                    className="readiness-progress-fill"
                    style={{ width: `${safeReadiness}%` }}
                  ></div>
                </div>

                <span className="readiness-progress-caption">
                  {safeSelectedSkills.length} of {totalSkills} assessed skills
                  selected
                </span>
              </div>
            </div>
          </article>

          <article className="dashboard-panel next-step-panel">
            <div className="panel-heading">
              <div>
                <h2>Your next step</h2>
                <p>Keep your learning moving</p>
              </div>

              <span className="panel-heading-icon">💡</span>
            </div>

            {safeMissingSkills.length > 0 ? (
              <div className="next-step-content">
                <div className="next-step-badge">RECOMMENDED FOCUS</div>

                <h3>Build your next skill</h3>

                <p>
                  Start with one of the skills you still need for{" "}
                  <strong>{career}</strong>.
                </p>

                <div className="next-skill-highlight">
                  <span>✦</span>
                  {safeMissingSkills[0]}
                </div>

                <Link
                  to="/careers"
                  className="next-step-button"
                >
                  Continue Assessment →
                </Link>
              </div>
            ) : safeSelectedSkills.length > 0 ? (
              <div className="next-step-content">
                <div className="next-step-badge">GREAT WORK</div>

                <h3>You've covered your assessed skills!</h3>

                <p>
                  Keep practising, build projects, and explore the next
                  stage of your career journey.
                </p>

                <Link to="/careers" className="next-step-button">
                  Explore More Careers →
                </Link>
              </div>
            ) : (
              <div className="next-step-content">
                <div className="next-step-badge">START HERE</div>

                <h3>Discover your strengths</h3>

                <p>
                  Choose a career and complete a skill assessment to
                  receive a personalised overview.
                </p>

                <Link to="/careers" className="next-step-button">
                  Start Assessment →
                </Link>
              </div>
            )}
          </article>
        </section>

        <section className="dashboard-panel skills-panel">
          <div className="panel-heading skills-panel-heading">
            <div>
              <h2>Your skills</h2>
              <p>
                Skills connected to your {career} career path.
              </p>
            </div>

            <Link to="/careers" className="text-link">
              Update assessment →
            </Link>
          </div>

          <div className="skills-columns">
            <div className="skills-column">
              <div className="skills-column-title">
                <span className="skills-title-dot acquired-dot"></span>
                <h3>Skills you've selected</h3>
                <span className="skills-count">
                  {safeSelectedSkills.length}
                </span>
              </div>

              {safeSelectedSkills.length > 0 ? (
                <div className="dashboard-skill-list">
                  {safeSelectedSkills.map((skill) => (
                    <span className="dashboard-skill acquired-skill" key={skill}>
                      <span>✓</span> {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="empty-skills-message">
                  No skills selected yet. Start your assessment to add
                  your skills here.
                </p>
              )}
            </div>

            <div className="skills-column">
              <div className="skills-column-title">
                <span className="skills-title-dot missing-dot"></span>
                <h3>Skills to develop</h3>
                <span className="skills-count">
                  {safeMissingSkills.length}
                </span>
              </div>

              {safeMissingSkills.length > 0 ? (
                <div className="dashboard-skill-list">
                  {safeMissingSkills.map((skill) => (
                    <span className="dashboard-skill missing-skill" key={skill}>
                      <span>＋</span> {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="empty-skills-message">
                  Your missing skills will appear here after your
                  assessment.
                </p>
              )}
            </div>
          </div>
        </section>

        <footer className="dashboard-footer">
          <Link to="/" className="dashboard-footer-brand">
            <span className="footer-mini-logo">CL</span>
            CareerLens
          </Link>

          <p>A clearer view of your skills. A stronger path to your future.</p>

          <span>© 2026 CareerLens</span>
        </footer>
      </section>
    </main>
  );
}

export default Dashboard;
