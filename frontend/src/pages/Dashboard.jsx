import { useLocation, Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const location = useLocation();

  const career = location.state?.career || "Data Scientist";
  const selectedSkills = location.state?.selectedSkills || [];
  const missingSkills = location.state?.missingSkills || [];
  const readiness = location.state?.readiness || 0;


  return (
    <div className="dashboard-page">

      <div className="dashboard-container">

        {/* Header */}

        <div className="dashboard-header">

          <div>

            <p className="dashboard-label">
              CAREERLENS DASHBOARD
            </p>

            <h1>
              Welcome back! 👋
            </h1>

            <p>
              Track your career journey and keep improving your skills.
            </p>

          </div>


          <div className="target-career-box">

            <span>
              Target Career
            </span>

            <strong>
              {career}
            </strong>

          </div>

        </div>


        {/* Overview Cards */}

        <div className="overview-grid">


          <div className="overview-card">

            <div className="overview-icon">
              🎯
            </div>

            <div>

              <span>
                Career Readiness
              </span>

              <h2>
                {readiness}%
              </h2>

            </div>

          </div>


          <div className="overview-card">

            <div className="overview-icon">
              🛠️
            </div>

            <div>

              <span>
                Skills Acquired
              </span>

              <h2>
                {selectedSkills.length}
              </h2>

            </div>

          </div>


          <div className="overview-card">

            <div className="overview-icon">
              📚
            </div>

            <div>

              <span>
                Skills to Improve
              </span>

              <h2>
                {missingSkills.length}
              </h2>

            </div>

          </div>


          <div className="overview-card">

            <div className="overview-icon">
              📈
            </div>

            <div>

              <span>
                Learning Progress
              </span>

              <h2>
                {readiness}%
              </h2>

            </div>

          </div>


        </div>


        {/* Main Dashboard Sections */}

        <div className="dashboard-grid">


          {/* Current Skills */}

          <div className="dashboard-card">

            <div className="card-title">

              <h2>
                Your Skills
              </h2>

              <span>
                {selectedSkills.length} skills
              </span>

            </div>


            <div className="dashboard-skills">

              {selectedSkills.length > 0 ? (

                selectedSkills.map((skill) => (

                  <span key={skill}>
                    ✓ {skill}
                  </span>

                ))

              ) : (

                <p>
                  No skills selected yet.
                </p>

              )}

            </div>

          </div>


          {/* Skills to Improve */}

          <div className="dashboard-card">

            <div className="card-title">

              <h2>
                Skills to Improve
              </h2>

              <span>
                {missingSkills.length} skills
              </span>

            </div>


            <div className="improvement-list">

              {missingSkills.length > 0 ? (

                missingSkills.slice(0, 5).map((skill, index) => (

                  <div key={skill}>

                    <span>
                      {skill}
                    </span>

                    <strong>
                      {index < 2 ? "High Priority" : "Medium"}
                    </strong>

                  </div>

                ))

              ) : (

                <p>
                  🎉 You have completed all required skills!
                </p>

              )}

            </div>

          </div>


        </div>


        {/* Learning Progress */}

        <div className="dashboard-card learning-card">

          <div className="card-title">

            <div>

              <h2>
                Learning Progress
              </h2>

              <p>
                Keep learning to improve your career readiness.
              </p>

            </div>

            <strong>
              {readiness}%
            </strong>

          </div>


          <div className="learning-progress">

            <div
              className="learning-progress-fill"
              style={{ width: `${readiness}%` }}
            ></div>

          </div>

        </div>


        {/* Navigation */}

        <div className="dashboard-navigation">

          <Link
            to="/careers"
            className="dashboard-secondary-btn"
          >
            ← Change Career
          </Link>

          <Link
            to="/"
            className="dashboard-primary-btn"
          >
            Back to Home
          </Link>

        </div>


      </div>

    </div>
  );
}

export default Dashboard;