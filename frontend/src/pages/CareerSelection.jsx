import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import careerData from "../data/careerData";
import "./CareerSelection.css";

function CareerSelection() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const careers = Object.entries(careerData);

  const categories = [
    "All",
    ...new Set(careers.map(([, career]) => career.category))
  ];

  const filteredCareers = useMemo(() => {
    return careers.filter(([careerName, career]) => {
      const matchesSearch =
        careerName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        career.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        career.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, careers]);

  const selectCareer = (career) => {
    navigate(`/assessment?career=${encodeURIComponent(career)}`);
  };

  return (
    <div className="career-page">

      {/* Page Header */}

      <div className="career-header">

        <p className="career-label">
          EXPLORE CAREER PATHS
        </p>

        <h1>
          Find Your <span>Career Direction</span>
        </h1>

        <p className="career-subtitle">
          Explore in-demand career paths, understand the skills
          you need, and choose the direction that fits you best.
        </p>

      </div>


      {/* Search */}

      <div className="career-search">

        <span className="search-icon">
          🔎
        </span>

        <input
          type="text"
          placeholder="Search careers..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

      </div>


      {/* Categories */}

      <div className="category-filter">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* Career Count */}

      <div className="career-results">

        <p>
          Showing{" "}
          <strong>{filteredCareers.length}</strong>{" "}
          career{filteredCareers.length !== 1 ? "s" : ""}
        </p>

      </div>


      {/* Career Cards */}

      <div className="career-grid">

        {filteredCareers.length > 0 ? (

          filteredCareers.map(([careerName, career]) => (

            <div
              className="career-card"
              key={careerName}
              onClick={() => selectCareer(careerName)}
            >

              <div className="career-card-top">

                <div className="career-icon">
                  {career.icon}
                </div>

                <span className="career-category">
                  {career.category}
                </span>

              </div>


              <h2>
                {careerName}
              </h2>


              <p>
                {career.description}
              </p>


              <div className="career-card-footer">

                <span>
                  {career.skills.length} skills
                </span>

                <span className="career-arrow">
                  →
                </span>

              </div>

            </div>

          ))

        ) : (

          <div className="no-careers">

            <div>
              🔍
            </div>

            <h2>
              No careers found
            </h2>

            <p>
              Try searching for a different career
              or choose another category.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default CareerSelection;