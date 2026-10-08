import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./SkillAssessment.css";

function SkillAssessment() {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const career = searchParams.get("career");

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (skill) => {

    if (selectedSkills.includes(skill)) {

      setSelectedSkills(
        selectedSkills.filter((item) => item !== skill)
      );

    } else {

      setSelectedSkills([
        ...selectedSkills,
        skill
      ]);

    }
  };

  const careerSkills = {

    "Data Analyst": [
      "Excel",
      "SQL",
      "Python",
      "Pandas",
      "Statistics",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "MySQL"
    ],

    "Data Scientist": [
      "Python",
      "SQL",
      "Statistics",
      "Probability",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
      "Scikit-learn",
      "Regression",
      "Classification",
      "Clustering",
      "Data Visualization",
      "Feature Engineering"
    ],

    "ML Engineer": [
      "Python",
      "SQL",
      "Machine Learning",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "CNN",
      "Statistics",
      "Feature Engineering",
      "Git",
      "GitHub",
      "API Development",
      "Docker"
    ],

    "AI Engineer": [
      "Python",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Transformers",
      "LLMs",
      "Generative AI",
      "RAG",
      "API Development",
      "Git",
      "GitHub"
    ]

  };

  const skills = careerSkills[career] || [];

  const handleContinue = () => {

    navigate("/skill-gap", {
      state: {
        career: career,
        selectedSkills: selectedSkills
      }
    });

  };

  return (
    <div className="assessment-page">

      <div className="assessment-container">

        <p className="assessment-label">
          CAREER ASSESSMENT
        </p>

        <h1>Skill Assessment</h1>

        <p className="target-career">
          Target Career: <strong>{career}</strong>
        </p>

        <div className="assessment-card">

          <h2>What skills do you currently have?</h2>

          <p>
            Select all the skills you are comfortable working with.
          </p>

          <p>
            <strong>{selectedSkills.length}</strong> skills selected
          </p>

          <div className="skills-grid">

            {skills.map((skill) => (

              <label
                className="skill-option"
                key={skill}
              >

                <input
                  type="checkbox"
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                />

                <span>{skill}</span>

              </label>

            ))}

          </div>

          <button
            className="continue-btn"
            onClick={handleContinue}
          >
            Continue →
          </button>

        </div>

      </div>

    </div>
  );
}

export default SkillAssessment;