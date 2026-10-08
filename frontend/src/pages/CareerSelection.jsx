import { useNavigate } from "react-router-dom";
import "./CareerSelection.css";

function CareerSelection() {

  const navigate = useNavigate();

  const selectCareer = (career) => {
    navigate(`/assessment?career=${career}`);
  };

  return (
    <div className="career-page">

      <h1>What career are you aiming for?</h1>

      <p>
        Choose your target role to personalize your career journey.
      </p>

      <div className="career-grid">

        <div
          className="career-card"
          onClick={() => selectCareer("Data Analyst")}
        >
          <div className="career-icon">📊</div>
          <h2>Data Analyst</h2>
          <p>
            Analyze data and discover useful insights.
          </p>
        </div>


        <div
          className="career-card"
          onClick={() => selectCareer("Data Scientist")}
        >
          <div className="career-icon">🤖</div>
          <h2>Data Scientist</h2>
          <p>
            Use data, statistics and machine learning to solve problems.
          </p>
        </div>


        <div
          className="career-card"
          onClick={() => selectCareer("ML Engineer")}
        >
          <div className="career-icon">💻</div>
          <h2>ML Engineer</h2>
          <p>
            Build and deploy machine learning systems.
          </p>
        </div>


        <div
          className="career-card"
          onClick={() => selectCareer("AI Engineer")}
        >
          <div className="career-icon">🧠</div>
          <h2>AI Engineer</h2>
          <p>
            Build intelligent applications using AI technologies.
          </p>
        </div>

      </div>

    </div>
  );
}

export default CareerSelection;