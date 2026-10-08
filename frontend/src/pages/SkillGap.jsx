import { useLocation } from "react-router-dom";
import "./SkillGap.css";

function SkillGap() {

  const location = useLocation();

  const career = location.state?.career;
  const selectedSkills = location.state?.selectedSkills || [];

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

  const requiredSkills = careerSkills[career] || [];

  const missingSkills = requiredSkills.filter(
    (skill) => !selectedSkills.includes(skill)
  );


  // Learning recommendations for each skill

  const recommendations = {

    "Python":
      "Practice Python programming, functions, OOP and problem solving.",

    "SQL":
      "Practice SELECT, JOIN, GROUP BY, subqueries and window functions.",

    "Statistics":
      "Learn probability, distributions, hypothesis testing and statistical inference.",

    "Probability":
      "Study probability rules, conditional probability and common distributions.",

    "Pandas":
      "Practice data cleaning, filtering, grouping and data manipulation using Pandas.",

    "NumPy":
      "Learn arrays, indexing, vectorized operations and numerical computing.",

    "Matplotlib":
      "Practice creating charts and visualizing data using Matplotlib.",

    "Seaborn":
      "Learn statistical visualization and create informative plots using Seaborn.",

    "Machine Learning":
      "Learn supervised and unsupervised learning algorithms and model evaluation.",

    "Scikit-learn":
      "Practice building, training and evaluating machine learning models.",

    "Regression":
      "Learn linear regression, multiple regression and model evaluation.",

    "Classification":
      "Practice classification algorithms such as Logistic Regression, Decision Trees and Random Forest.",

    "Clustering":
      "Learn unsupervised clustering techniques such as K-Means and hierarchical clustering.",

    "Data Visualization":
      "Practice choosing appropriate charts and communicating insights clearly.",

    "Feature Engineering":
      "Learn how to create, transform and select useful features for machine learning models.",

    "Excel":
      "Practice formulas, pivot tables, charts and data analysis in Excel.",

    "Power BI":
      "Learn Power Query, data modeling, DAX and dashboard creation.",

    "Tableau":
      "Practice interactive dashboards, calculated fields and data visualization.",

    "Data Cleaning":
      "Learn how to handle missing values, duplicates, outliers and inconsistent data.",

    "Deep Learning":
      "Learn neural networks, backpropagation and deep learning architectures.",

    "TensorFlow":
      "Practice building and training neural networks using TensorFlow.",

    "PyTorch":
      "Learn tensors, neural networks and model training using PyTorch.",

    "Git":
      "Learn version control, commits, branches and collaborative workflows.",

    "GitHub":
      "Practice repositories, pull requests, issues and GitHub collaboration.",

    "API Development":
      "Learn how to build REST APIs and connect frontend applications with backend services.",

    "Docker":
      "Learn containers, Dockerfiles and how to package applications.",

    "Natural Language Processing":
      "Learn text preprocessing, embeddings, classification and language models.",

    "Computer Vision":
      "Learn image processing, CNNs and computer vision techniques.",

    "Transformers":
      "Learn attention mechanisms and transformer-based language and vision models.",

    "LLMs":
      "Learn how large language models work and how to build applications using them.",

    "Generative AI":
      "Learn prompting, embeddings, RAG and generative AI application development.",

    "RAG":
      "Learn retrieval-augmented generation using embeddings and vector databases.",

    "Artificial Intelligence":
      "Learn AI fundamentals, search, reasoning and intelligent systems."

  };


  // Calculate career readiness

  const readiness =
    requiredSkills.length > 0
      ? Math.round(
          (selectedSkills.length / requiredSkills.length) * 100
        )
      : 0;


  return (

    <div className="skill-gap-page">

      <div className="skill-gap-container">

        {/* Page Heading */}

        <p className="skill-gap-label">
          CAREER INSIGHTS
        </p>

        <h1>
          Skill Gap Analysis
        </h1>

        <p className="career-name">
          Target Career: <strong>{career}</strong>
        </p>


        {/* Career Readiness */}

        <div className="readiness-card">

          <div>

            <h2>
              Career Readiness
            </h2>

            <p>
              Based on the skills you selected.
            </p>

          </div>

          <div className="readiness-score">
            {readiness}%
          </div>

        </div>


        {/* Your Skills */}

        <div className="skills-section">

          <h2>
            Your Skills
          </h2>

          <div className="skill-list">

            {selectedSkills.length > 0 ? (

              selectedSkills.map((skill) => (

                <span
                  className="skill-badge"
                  key={skill}
                >
                  ✓ {skill}
                </span>

              ))

            ) : (

              <p>
                No skills selected.
              </p>

            )}

          </div>

        </div>


        {/* Missing Skills */}

        <div className="skills-section">

          <h2>
            Skills You Need to Improve
          </h2>

          <div className="skill-list">

            {missingSkills.length > 0 ? (

              missingSkills.map((skill) => (

                <span
                  className="missing-skill-badge"
                  key={skill}
                >
                  + {skill}
                </span>

              ))

            ) : (

              <p>
                🎉 You have selected all the required skills!
              </p>

            )}

          </div>

        </div>


        {/* Recommended Learning */}

        {missingSkills.length > 0 && (

          <div className="recommendations-section">

            <h2>
              Recommended Learning
            </h2>

            <p className="recommendations-description">
              Focus on these skills to improve your readiness
              for your target career.
            </p>


            <div className="recommendation-grid">

              {missingSkills.map((skill) => (

                <div
                  className="recommendation-card"
                  key={skill}
                >

                  <div className="recommendation-icon">
                    📚
                  </div>

                  <h3>
                    {skill}
                  </h3>

                  <p>
                    {recommendations[skill]}
                  </p>

                  <a
                    className="learn-btn"
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      `${skill} tutorial for beginners`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Learning →
                  </a>

                </div>

              ))}

            </div>

          </div>

        )}


      </div>

    </div>

  );
}

export default SkillGap;