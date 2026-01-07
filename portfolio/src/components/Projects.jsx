import useScreen from "../hooks/useScreen";

export default function Projects() {
  const { isMobile, isTablet } = useScreen();
  const styles = getStyles(isMobile, isTablet);

  const projects = [
    {
      title: "AI-Powered Resume Screening & Job Matching System",
      description:
        "End-to-end AI system that evaluates resumes against job descriptions using semantic similarity, NLP, and vector embeddings. Includes a production-style FastAPI backend and React frontend.",
      tech: [
        "Python",
        "FastAPI",
        "React",
        "LangChain",
        "HuggingFace",
        "FAISS",
        "Vector DB",
      ],
      source:
        "https://github.com/AyeshaSiddiq24/AI-Powered-Resume-Screening-Job-Matching-System",
    },
    {
      title: "Multi-Agent AI Research & Content Generation System",
      description:
        "Autonomous multi-agent system that performs live web research and generates structured outputs including reports, summaries, slide decks, LinkedIn posts, quizzes, and kid-friendly explanations using Gemini 2.5.",
      tech: [
        "Python",
        "Gemini 2.5",
        "DDGS",
        "Multi-Agent",
        "Streamlit",
        "python-pptx",
      ],
      source: "https://github.com/AyeshaSiddiq24/CAPSTONE_PROJECT",
    },
    {
      title: "Real-Time Fraud Detection System",
      description:
        "Scalable fraud detection pipeline using PySpark and Random Forest models. Includes feature engineering, distributed model training, MLflow tracking, and Dockerized deployment.",
      tech: [
        "Python",
        "PySpark",
        "Spark MLlib",
        "Random Forest",
        "MLflow",
        "Docker",
      ],
      source: "https://github.com/AyeshaSiddiq24/Real-Time-Fraud-Detection-System",
    },
    {
      title: "Med Ease: ML-Driven Symptom & Drug Recommendation System",
      description:
        "ML-powered healthcare system for symptom analysis, diagnostic predictions, and drug recommendations. Includes a responsive UI and resulted in a published research paper.",
      tech: ["Machine Learning", "Python", "Healthcare AI"],
      source: "https://github.com/AyeshaSiddiq24/MED-EASE-ML-DRIVEN-SYMPTOM-ANALYSIS-WITH-AN-EXPERT-DOCTOR-AND-DRUG-RECOMMENDATION-SYSTEM",
    },
    {
      title: "Statistical Analysis of GitHub Repository Popularity",
      description:
        "Large-scale statistical study on 10,000+ GitHub repositories to analyze factors affecting popularity using regression models, ANOVA, and robust diagnostics.",
      tech: [
        "R",
        "RStudio",
        "Regression",
        "ANOVA",
        "ggplot2",
        "Kaggle Dataset",
      ],
      source: "https://github.com/AyeshaSiddiq24/Statistical-Analysis-of-Factors-Influencing-GitHub-Repository-Popularity",
    },
    {
      title: "Library Management System",
      description:
        "Oracle-based database system to automate inventory, member management, borrowing, and reporting. Improved operational efficiency and reduced manual errors.",
      tech: ["Oracle DB", "SQL", "PL/SQL"],
      source: "",
    },
    {
      title: "Custom Store – Role-Based E-Commerce Platform",
      description:
        "Full-stack e-commerce platform with role-based dashboards for Admin, Seller, Customer, and Delivery Agent. Includes authentication, order tracking, and payment integration.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Bootstrap",
        "REST API",
        "bcrypt",
      ],
      source: "",
    },
    {
      title: "Hospital Management System",
      description:
        "Centralized Java-based HMS to manage patient records, appointments, billing, and staff coordination. Reduced operational bottlenecks and improved data accessibility.",
      tech: ["Java", "MySQL", "NetBeans"],
      source: "",
    },
  ];

  return (
    <section style={styles.section} id="projects">
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>
          Projects<span style={styles.dot}>.</span>
        </h2>
        <p style={styles.subtitle}>
          Showcase of technical implementations in AI and Data Engineering.
        </p>
        <div style={styles.underline}></div>
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 25px 60px rgba(79,140,255,0.18)";
              e.currentTarget.style.border =
                "1px solid rgba(79,140,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.08)";
            }}
          >
            <div style={styles.icon}>{"</>"}</div>

            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>

            <div style={styles.tags}>
              {project.tech.map((t, i) => (
                <span key={i} style={styles.tag}>
                  {t}
                </span>
              ))}
            </div>

            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                style={styles.sourceButton}
              >
                <GitHubIcon />
                <span>Source</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= ICON ================= */

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.3 10.3 0 015.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1 .8 2v3c0 .3.2.7.8.6a11.7 11.7 0 007.9-10.9C23.5 5.8 18.3.5 12 .5z" />
    </svg>
  );
}

/* ================= RESPONSIVE STYLES ================= */

function getStyles(isMobile, isTablet) {
  return {
    section: {
      padding: isMobile
        ? "80px 20px"
        : isTablet
        ? "120px 48px"
        : "140px 120px",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "#e5e7eb",
    },

    header: {
      marginBottom: "70px",
    },

    title: {
      fontSize: isMobile ? "32px" : "42px",
      fontWeight: 700,
      marginBottom: "12px",
    },

    dot: {
      color: "#4f8cff",
    },

    subtitle: {
      fontSize: isMobile ? "15px" : "18px",
      color: "#94a3b8",
      maxWidth: "650px",
      lineHeight: 1.6,
    },

    underline: {
      width: "60px",
      height: "3px",
      background: "#4f8cff",
      marginTop: "18px",
      opacity: 0.6,
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
    },

    card: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "28px",
      transition: "all 0.35s ease",
    },

    icon: {
      fontSize: "28px",
      color: "#4f8cff",
      opacity: 0.7,
      marginBottom: "18px",
    },

    cardTitle: {
      fontSize: "18px",
      fontWeight: 600,
      marginBottom: "10px",
    },

    cardDescription: {
      fontSize: "15px",
      color: "#cbd5f5",
      lineHeight: 1.6,
      marginBottom: "20px",
    },

    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "22px",
    },

    tag: {
      fontSize: "13px",
      color: "#4f8cff",
      border: "1px solid rgba(79,140,255,0.35)",
      padding: "6px 10px",
      borderRadius: "8px",
    },

    sourceButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 14px",
      borderRadius: "10px",
      border: "1px solid rgba(79,140,255,0.35)",
      color: "#e5e7eb",
      textDecoration: "none",
      fontSize: "14px",
    },
  };
}
