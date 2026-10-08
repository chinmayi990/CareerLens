import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import careerData from "../data/careerData";
import "./SkillAssessment.css";

function SkillAssessment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const career = searchParams.get("career");
  const careerInfo = careerData[career];

  const [selectedSkills, setSelectedSkills] = useState([]);

  if (!careerInfo) {
    return (
      <div className="assessment-page">
        <div className="assessment-error">
          <h2>Career not found</h2>
          <p>Please go back and select a valid career.</p>

          <button
            className="assessment-back-btn"
            onClick={() => navigate("/careers")}
          >
            ← Back to Careers
          </button>
        </div>
      </div>
    );
  }

  const skills = careerInfo.skills;

  const toggleSkill = (skill) => {
    setSelectedSkills((previousSkills) => {
      if (previousSkills.includes(skill)) {
        return previousSkills.filter(
          (item) => item !== skill
        );
      }

      return [...previousSkills, skill];
    });
  };

  const continueToSkillGap = () => {
    navigate("/skill-gap", {
      state: {
        career,
        selectedSkills,
      },
    });
  };

  const selectionPercentage =
    skills.length > 0
      ? Math.round(
          (selectedSkills.length / skills.length) * 100
        )
      : 0;

  return (
    <div className="assessment-page">
      <div className="assessment-container">

        {/* Header */}
        <div className="assessment-header">

          <button
            className="back-button"
            onClick={() => navigate("/careers")}
          >
            ← Back to Careers
          </button>

          <div className="assessment-icon">
            {careerInfo.icon}
          </div>

          <p className="assessment-category">
            {careerInfo.category}
          </p>

          <h1>
            {career} <span>Skill Assessment</span>
          </h1>

          <p className="assessment-description">
            {careerInfo.description}
          </p>

        </div>

        {/* Progress */}
        <div className="assessment-progress-card">

          <div className="progress-text">
            <div>
              <strong>Your Skills</strong>
              <span>
                {selectedSkills.length} / {skills.length} selected
              </span>
            </div>

            <strong>{selectionPercentage}%</strong>
          </div>

          <div className="assessment-progress-bar">
            <div
              className="assessment-progress-fill"
              style={{
                width: `${selectionPercentage}%`,
              }}
            ></div>
          </div>

        </div>

        {/* Instructions */}
        <div className="assessment-instructions">
          <span>💡</span>

          <div>
            <strong>Select the skills you already know</strong>

            <p>
              Choose all the skills you currently have.
              CareerLens will use your selections to identify
              your skill gaps.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">

          <div className="skills-section-header">
            <div>
              <p className="section-label">
                REQUIRED SKILLS
              </p>

              <h2>
                What skills do you have?
              </h2>
            </div>

            <span className="skills-count">
              {skills.length} skills
            </span>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => {
              const isSelected =
                selectedSkills.includes(skill);

              return (
                <button
                  key={skill}
                  className={
                    isSelected
                      ? "skill-option selected"
                      : "skill-option"
                  }
                  onClick={() => toggleSkill(skill)}
                >
                  <span className="skill-check">
                    {isSelected ? "✓" : ""}
                  </span>

                  <span>{skill}</span>
                </button>
              );
            })}

          </div>
        </div>

        {/* Bottom Action */}
        <div className="assessment-action">

          <div>
            <strong>
              {selectedSkills.length} skills selected
            </strong>

            <p>
              You can change your selections anytime.
            </p>
          </div>

          <button
            className="continue-button"
            onClick={continueToSkillGap}
          >
            Analyze My Skill Gap →
          </button>

        </div>

      </div>
    </div>
  );
}

export default SkillAssessment;