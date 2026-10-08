const careerData = {
  "AI Engineer": {
    icon: "🤖",
    category: "Artificial Intelligence",
    description:
      "Build intelligent applications using machine learning, deep learning and modern AI technologies.",
    skills: [
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
      "APIs",
      "Git",
      "GitHub"
    ]
  },

  "Machine Learning Engineer": {
    icon: "🧠",
    category: "Artificial Intelligence",
    description:
      "Develop, train and deploy machine learning models for real-world applications.",
    skills: [
      "Python",
      "SQL",
      "Statistics",
      "Probability",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Deep Learning",
      "Git",
      "Docker"
    ]
  },

  "Generative AI Engineer": {
    icon: "✨",
    category: "Artificial Intelligence",
    description:
      "Build applications powered by large language models, generative AI and retrieval systems.",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "Prompt Engineering",
      "Generative AI",
      "Transformers",
      "Embeddings",
      "RAG",
      "Vector Databases",
      "LangChain",
      "APIs",
      "Git",
      "GitHub",
      "Docker"
    ]
  },

  "Data Scientist": {
    icon: "📊",
    category: "Data & Analytics",
    description:
      "Use statistics, programming and machine learning to discover insights and solve business problems.",
    skills: [
      "Python",
      "SQL",
      "Statistics",
      "Probability",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
      "Scikit-learn",
      "Regression",
      "Classification",
      "Clustering",
      "Feature Engineering",
      "Data Visualization"
    ]
  },

  "Data Analyst": {
    icon: "📈",
    category: "Data & Analytics",
    description:
      "Analyze data, create dashboards and communicate insights that support business decisions.",
    skills: [
      "Excel",
      "SQL",
      "Python",
      "Pandas",
      "Statistics",
      "Data Cleaning",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "MySQL",
      "DAX",
      "Dashboard Design"
    ]
  },

  "Data Engineer": {
    icon: "🗄️",
    category: "Data & Analytics",
    description:
      "Build data pipelines and infrastructure that collect, transform and store large-scale data.",
    skills: [
      "Python",
      "SQL",
      "ETL",
      "Data Pipelines",
      "Pandas",
      "Apache Spark",
      "PySpark",
      "Airflow",
      "Data Warehousing",
      "PostgreSQL",
      "Docker",
      "Git",
      "Cloud Computing",
      "AWS"
    ]
  },

  "Backend Developer": {
    icon: "⚙️",
    category: "Software Development",
    description:
      "Build reliable server-side applications, APIs, databases and backend systems.",
    skills: [
      "Python",
      "Java",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Authentication",
      "Git",
      "GitHub",
      "Docker",
      "Testing",
      "Redis"
    ]
  },

  "Full Stack Developer": {
    icon: "🌐",
    category: "Software Development",
    description:
      "Build complete web applications across frontend, backend, databases and APIs.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "SQL",
      "MongoDB",
      "Authentication",
      "Git",
      "GitHub",
      "Docker",
      "Responsive Design"
    ]
  },

  "Frontend Developer": {
    icon: "🎨",
    category: "Software Development",
    description:
      "Create responsive, accessible and interactive user interfaces for modern web applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Responsive Design",
      "UI Design",
      "Accessibility",
      "REST APIs",
      "Git",
      "GitHub",
      "Testing"
    ]
  },

  "Software Engineer": {
    icon: "💻",
    category: "Software Development",
    description:
      "Design, develop, test and maintain software applications and engineering systems.",
    skills: [
      "Programming",
      "Python",
      "Java",
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "SQL",
      "Git",
      "GitHub",
      "REST APIs",
      "Testing",
      "System Design",
      "Docker"
    ]
  },

  "Cloud Engineer": {
    icon: "☁️",
    category: "Cloud & Infrastructure",
    description:
      "Design, deploy and maintain scalable cloud infrastructure and services.",
    skills: [
      "Linux",
      "Networking",
      "AWS",
      "Azure",
      "Cloud Computing",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Git",
      "Python",
      "Security Fundamentals"
    ]
  },

  "DevOps / SRE Engineer": {
    icon: "🔄",
    category: "Cloud & Infrastructure",
    description:
      "Automate software delivery and build reliable, scalable infrastructure and deployment systems.",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Python",
      "Bash",
      "Monitoring",
      "Networking"
    ]
  },

  "Cybersecurity Analyst": {
    icon: "🛡️",
    category: "Cybersecurity",
    description:
      "Monitor systems, detect threats and help protect organizations from cyber attacks.",
    skills: [
      "Cybersecurity Fundamentals",
      "Networking",
      "Linux",
      "Python",
      "SQL",
      "SIEM",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Assessment",
      "Wireshark",
      "Security Monitoring",
      "Git"
    ]
  },

  "Security Engineer": {
    icon: "🔐",
    category: "Cybersecurity",
    description:
      "Design and implement security controls that protect applications, networks and infrastructure.",
    skills: [
      "Cybersecurity",
      "Networking",
      "Linux",
      "Python",
      "Cloud Security",
      "Application Security",
      "Network Security",
      "Identity and Access Management",
      "Encryption",
      "SIEM",
      "Vulnerability Management",
      "Docker"
    ]
  },

  "QA / SDET Engineer": {
    icon: "🧪",
    category: "Software Quality",
    description:
      "Ensure software quality through testing, automation and reliable engineering practices.",
    skills: [
      "Software Testing",
      "Manual Testing",
      "Automation Testing",
      "Java",
      "Python",
      "Selenium",
      "API Testing",
      "SQL",
      "Test Cases",
      "Git",
      "GitHub",
      "CI/CD"
    ]
  },

  "Android Developer": {
    icon: "📱",
    category: "Mobile Development",
    description:
      "Build modern Android applications with intuitive interfaces and reliable mobile experiences.",
    skills: [
      "Java",
      "Kotlin",
      "Android Studio",
      "Android SDK",
      "XML",
      "Jetpack Compose",
      "REST APIs",
      "Firebase",
      "SQLite",
      "Git",
      "GitHub",
      "UI Design"
    ]
  },

  "Product Manager": {
    icon: "📦",
    category: "Product & Business",
    description:
      "Define product strategy, understand user needs and guide products from idea to launch.",
    skills: [
      "Product Strategy",
      "Product Roadmaps",
      "Market Research",
      "User Research",
      "Data Analysis",
      "SQL",
      "A/B Testing",
      "Agile",
      "Scrum",
      "Communication",
      "Problem Solving",
      "Project Management"
    ]
  },

  "Business Analyst": {
    icon: "📋",
    category: "Product & Business",
    description:
      "Analyze business requirements and data to help organizations make better decisions.",
    skills: [
      "Business Analysis",
      "Requirements Gathering",
      "SQL",
      "Excel",
      "Power BI",
      "Data Visualization",
      "Statistics",
      "Process Analysis",
      "Documentation",
      "Communication",
      "Problem Solving",
      "Agile"
    ]
  },

  "AI/ML Research Engineer": {
    icon: "🔬",
    category: "Research & AI",
    description:
      "Research advanced AI and machine learning methods and turn new ideas into working systems.",
    skills: [
      "Python",
      "Mathematics",
      "Statistics",
      "Probability",
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Research Methods",
      "Natural Language Processing",
      "Computer Vision",
      "Scientific Computing",
      "Git"
    ]
  },

  "MLOps Engineer": {
    icon: "🔧",
    category: "AI & Infrastructure",
    description:
      "Build systems for deploying, monitoring and maintaining machine learning models in production.",
    skills: [
      "Python",
      "Machine Learning",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub",
      "AWS",
      "Model Deployment",
      "ML Pipelines",
      "Model Monitoring",
      "Terraform",
      "FastAPI"
    ]
  }
};

export default careerData;