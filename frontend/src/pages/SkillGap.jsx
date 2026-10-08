import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import careerData from "../data/careerData";
import "./SkillGap.css";

function SkillGap() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    career,
    selectedSkills = [],
  } = location.state || {};

  const careerInfo = careerData[career];

  if (!careerInfo) {
    return (
      <div className="skill-gap-page">
        <div className="skill-gap-error">
          <h2>Assessment data not found</h2>

          <p>
            Please select a career and complete the
            skill assessment first.
          </p>

          <button
            onClick={() => navigate("/careers")}
          >
            ← Choose a Career
          </button>
        </div>
      </div>
    );
  }

  const requiredSkills = careerInfo.skills;

  const acquiredSkills = requiredSkills.filter(
    (skill) => selectedSkills.includes(skill)
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !selectedSkills.includes(skill)
  );

  const readiness =
    requiredSkills.length > 0
      ? Math.round(
          (acquiredSkills.length /
            requiredSkills.length) *
            100
        )
      : 0;

  const skillLevel = useMemo(() => {
    if (readiness >= 80) {
      return {
        title: "Excellent Progress!",
        description:
          "You already have most of the skills required for this career.",
        className: "excellent",
      };
    }

    if (readiness >= 60) {
      return {
        title: "Good Progress!",
        description:
          "You have a strong foundation. Focus on the remaining skills.",
        className: "good",
      };
    }

    if (readiness >= 40) {
      return {
        title: "You're Getting There!",
        description:
          "You have a foundation, but there are several skills to develop.",
        className: "average",
      };
    }

    return {
      title: "Let's Build Your Foundation!",
      description:
        "Start with the missing skills and gradually build your career readiness.",
      className: "beginner",
    };
  }, [readiness]);

  const getRecommendation = (skill) => {
    const recommendations = {
      Python:
        "Practice Python programming through small projects, coding exercises and real-world datasets.",

      SQL:
        "Practice SELECT, JOIN, GROUP BY, subqueries and window functions using real datasets.",

      Statistics:
        "Learn descriptive statistics, probability, hypothesis testing and statistical distributions.",

      Probability:
        "Study probability concepts and solve practical probability problems.",

      NumPy:
        "Practice arrays, indexing, vectorized operations and numerical computations.",

      Pandas:
        "Work with real datasets and practice cleaning, filtering, grouping and data transformation.",

      Matplotlib:
        "Create charts and visualizations from real datasets using Matplotlib.",

      Seaborn:
        "Build statistical visualizations and explore relationships between variables.",

      "Machine Learning":
        "Build beginner ML projects using regression, classification and clustering algorithms.",

      "Deep Learning":
        "Learn neural networks and build simple image or text classification projects.",

      TensorFlow:
        "Build neural-network projects and practice model training using TensorFlow.",

      PyTorch:
        "Learn tensors, neural networks and model training through practical projects.",

      "Natural Language Processing":
        "Practice text preprocessing, classification and sentiment-analysis projects.",

      "Computer Vision":
        "Build image-processing and image-classification projects using OpenCV or deep learning.",

      Transformers:
        "Learn transformer architecture and experiment with modern NLP models.",

      LLMs:
        "Learn how large language models work and build applications using LLM APIs.",

      "Generative AI":
        "Build practical GenAI applications such as summarizers, assistants and content generators.",

      RAG:
        "Learn retrieval-augmented generation and build a document-question answering system.",

      "Prompt Engineering":
        "Practice structured prompts, few-shot examples and prompt evaluation techniques.",

      "Vector Databases":
        "Learn embeddings and build semantic-search applications using vector databases.",

      LangChain:
        "Build small LLM workflows using chains, agents and retrieval pipelines.",

      React:
        "Build interactive frontend projects and practice components, state and routing.",

      JavaScript:
        "Practice DOM manipulation, asynchronous programming, APIs and modern JavaScript.",

      HTML:
        "Build structured web pages and practice semantic HTML.",

      CSS:
        "Practice responsive layouts, Flexbox, Grid and modern UI design.",

      "REST APIs":
        "Build and consume APIs using HTTP methods, JSON and authentication.",

      Docker:
        "Containerize small applications and learn images, containers and Docker Compose.",

      Git:
        "Practice commits, branches, merges and collaborative Git workflows.",

      GitHub:
        "Create repositories, write good READMEs and practice GitHub collaboration.",

      Excel:
        "Practice formulas, pivot tables, data cleaning and dashboard creation.",

      "Power BI":
        "Build dashboards using Power Query, DAX and interactive visualizations.",

      Tableau:
        "Create interactive dashboards and practice data storytelling.",

      "Data Visualization":
        "Create dashboards and charts that communicate insights clearly.",

      DAX:
        "Practice calculated columns, measures, filter context and common DAX functions.",

      "Data Cleaning":
        "Work with messy datasets and practice handling missing values, duplicates and outliers.",

      "Feature Engineering":
        "Practice transforming raw data into meaningful features for machine learning models.",

      "Scikit-learn":
        "Build end-to-end ML projects using preprocessing, model training and evaluation.",

      "Data Pipelines":
        "Build ETL pipelines that collect, transform and move data between systems.",

      "Data Warehousing":
        "Learn dimensional modeling, fact tables, dimension tables and analytical databases.",

      AWS:
        "Learn core AWS services and deploy a small application to the cloud.",

      Azure:
        "Explore Azure compute, storage, databases and deployment services.",

      Kubernetes:
        "Learn containers, pods, deployments, services and basic Kubernetes operations.",

      "Cybersecurity Fundamentals":
        "Learn networking, authentication, common attacks and security principles.",

      Networking:
        "Study TCP/IP, DNS, HTTP, routing, ports and basic network security.",

      Linux:
        "Practice Linux commands, permissions, processes, networking and shell scripting.",

      "Data Structures":
        "Practice arrays, linked lists, stacks, queues, trees, graphs and hash tables.",

      Algorithms:
        "Practice searching, sorting, recursion, greedy algorithms and dynamic programming.",

      "Object-Oriented Programming":
        "Build projects using classes, objects, inheritance, abstraction and encapsulation.",

      "System Design":
        "Learn scalability, databases, caching, APIs and distributed-system fundamentals.",
    };

    return (
      recommendations[skill] ||
      `Build practical projects and complete hands-on exercises to improve your ${skill} skills.`
    );
  };

  return (
    <div className="skill-gap-page">
      <div className="skill-gap-container">

        {/* Header */}

        <div className="skill-gap-header">

          <button
            className="skill-gap-back"
            onClick={() =>
              navigate(
                `/assessment?career=${encodeURIComponent(
                  career
                )}`
              )
            }
          >
            ← Back to Assessment
          </button>

          <div className="skill-gap-icon">
            {careerInfo.icon}
          </div>

          <p className="skill-gap-category">
            {careerInfo.category}
          </p>

          <h1>
            Your <span>Skill Gap</span>
          </h1>

          <p>
            Here's how prepared you are for a career
            as a <strong>{career}</strong>.
          </p>

        </div>

        {/* Readiness */}

        <div className="readiness-card">

          <div
            className="readiness-circle"
            style={{
              "--progress": `${readiness}%`,
            }}
          >
            <div>
              <strong>{readiness}%</strong>
              <span>Ready</span>
            </div>
          </div>

          <div className="readiness-content">

            <p className="section-label">
              CAREER READINESS
            </p>

            <h2 className={skillLevel.className}>
              {skillLevel.title}
            </h2>

            <p>
              {skillLevel.description}
            </p>

            <div className="readiness-stats">

              <div>
                <strong>
                  {acquiredSkills.length}
                </strong>

                <span>Skills You Have</span>
              </div>

              <div>
                <strong>
                  {missingSkills.length}
                </strong>

                <span>Skills to Learn</span>
              </div>

              <div>
                <strong>
                  {requiredSkills.length}
                </strong>

                <span>Total Skills</span>
              </div>

            </div>

          </div>

        </div>

        {/* Acquired Skills */}

        <section className="gap-section">

          <div className="gap-section-header">

            <div>
              <p className="section-label">
                YOUR STRENGTHS
              </p>

              <h2>
                Skills You Already Have
              </h2>
            </div>

            <span className="skill-number acquired-number">
              {acquiredSkills.length}
            </span>

          </div>

          {acquiredSkills.length > 0 ? (
            <div className="gap-skills-grid">

              {acquiredSkills.map((skill) => (
                <div
                  className="gap-skill-card acquired"
                  key={skill}
                >
                  <span className="gap-check">
                    ✓
                  </span>

                  <span>{skill}</span>
                </div>
              ))}

            </div>
          ) : (
            <div className="empty-skills">
              No skills selected yet.
            </div>
          )}

        </section>

        {/* Missing Skills */}

        <section className="gap-section">

          <div className="gap-section-header">

            <div>
              <p className="section-label">
                DEVELOPMENT AREAS
              </p>

              <h2>
                Skills You Should Learn
              </h2>
            </div>

            <span className="skill-number missing-number">
              {missingSkills.length}
            </span>

          </div>

          {missingSkills.length > 0 ? (
            <div className="missing-skills-list">

              {missingSkills.map((skill, index) => (
                <div
                  className="missing-skill-card"
                  key={skill}
                >

                  <div className="missing-skill-top">

                    <div className="missing-skill-name">

                      <span className="priority-number">
                        {index + 1}
                      </span>

                      <strong>
                        {skill}
                      </strong>

                    </div>

                    <span className="priority-label">
                      {index < 3
                        ? "HIGH PRIORITY"
                        : "RECOMMENDED"}
                    </span>

                  </div>

                  <p>
                    {getRecommendation(skill)}
                  </p>

                </div>
              ))}

            </div>
          ) : (
            <div className="complete-message">

              <span>🎉</span>

              <div>

                <strong>
                  You have all the required skills!
                </strong>

                <p>
                  You're ready to start building
                  projects and applying for roles.
                </p>

              </div>

            </div>
          )}

        </section>

        {/* Action */}

        <div className="skill-gap-action">

          <div>

            <strong>
              Ready for the next step?
            </strong>

            <p>
              Track your career progress from your dashboard.
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/dashboard", {
                state: {
                  career,
                  selectedSkills,
                  missingSkills,
                  readiness,
                },
              })
            }
          >
            Go to Dashboard →
          </button>

        </div>

      </div>
    </div>
  );
}

export default SkillGap;