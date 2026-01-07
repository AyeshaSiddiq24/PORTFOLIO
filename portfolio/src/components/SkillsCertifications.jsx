


export default function SkillsCertifications() {
  const skills = {
    "AI & Machine Learning": [
      "Large Language Models (LLMs)",
      "Generative AI",
      "Multi-Agent Systems",
      "Natural Language Processing (NLP)",
      "Prompt Engineering",
      "Model Training & Fine-tuning",
      "MLOps",
    ],
    "Data Engineering": [
      "ETL Pipelines",
      "PySpark",
      "Spark MLlib",
      "Distributed Systems",
      "Feature Engineering",
      "Vector Databases (FAISS)",
      "Data Warehousing",
    ],
    "Backend & Systems": [
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Docker",
      "MLflow",
      "SQL / PL-SQL",
      "Oracle DB",
    ],
    "Data Analysis & Visualization": [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "R",
      "ggplot2",
      "Regression & ANOVA",
    ],
  };

  const certifications = [
  {
    logo: "/logos/databricks.jpg",
    title: "Generative AI Fundamentals",
    org: "Databricks · 2025",
    skills: "Deep Learning · CNN · RNN · AI",
  },
  {
    logo: "/logos/kaggle.jpg",
    title: "5-Day AI Agents Intensive",
    org: "Google & Kaggle · 2025",
    skills: "LLMs · Multi-Agent · NLP · Streamlit",
  },
  {
    logo: "/logos/oracle.jpg",
    title: "Oracle Cloud Data Science Professional",
    org: "Oracle · 2025",
    skills: "Machine Learning · SQL · Cloud Systems",
  },
  {
    logo: "/logos/udemy.jpg",
    title: "Python Data Analysis & Visualization",
    org: "Udemy · 2024",
    skills: "Python · Pandas · Matplotlib · Seaborn",
  },
  {
    logo: "/logos/forage.jpg",
    title: "Software Engineering Job Simulation",
    org: "JPMorgan Chase (Forage) · 2025",
    skills: "Backend Systems · Java · APIs",
  },
];


  return (
    <section style={styles.section} id="skills">
      {/* HEADER */}
      <div style={styles.header}>
        <h2 style={styles.title}>
          Skills & Certifications<span style={styles.dot}>.</span>
        </h2>
        <p style={styles.subtitle}>
          Technical strengths backed by real-world projects and industry certifications.
        </p>
        <div style={styles.underline} />
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        {/* LEFT — SKILLS */}
        <div>
          <h3 style={styles.columnTitle}>Core Skills</h3>

          <div style={styles.skillGrid}>
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} style={styles.skillCard}>
                <h4 style={styles.skillCategory}>{category}</h4>
                <div style={styles.skillTags}>
                  {items.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — CERTIFICATIONS */}
        <div>
          <h3 style={styles.columnTitle}>Certifications</h3>

          <div style={styles.certList}>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                style={styles.certCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "#4f8cff";
                }} 
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
              >
                <div style={styles.certRow}>
                  {/* LOGO BADGE */}
                  <div style={styles.logoBadge}>
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      style={styles.logo}
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 style={styles.certTitle}>{cert.title}</h4>
                    <p style={styles.certOrg}>{cert.org}</p>
                    <p style={styles.certSkills}>{cert.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  section: {
    padding: "140px 120px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },

  header: {
    marginBottom: "80px",
  },

  title: {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "12px",
  },

  dot: {
    color: "#4f8cff",
  },

  subtitle: {
    fontSize: "18px",
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

  container: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "64px",
  },

  columnTitle: {
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "28px",
  },

  /* SKILLS */
  skillGrid: {
    display: "grid",
    gap: "24px",
  },

  skillCard: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "22px",
  },

  skillCategory: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "14px",
  },

  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  skillTag: {
    fontSize: "13px",
    padding: "6px 10px",
    borderRadius: "8px",
    color: "#4f8cff",
    border: "1px solid rgba(79,140,255,0.35)",
  },

  /* CERTIFICATIONS */
  certList: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  certCard: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "22px",
    transition: "all 0.3s ease",
  },

  certRow: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  logoBadge: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  logo: {
    width: "30px",
    height: "30px",
    objectFit: "contain",
  },

  certTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "4px",
  },

  certOrg: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "4px",
  },

  certSkills: {
    fontSize: "13px",
    color: "#cbd5f5",
    lineHeight: 1.5,
  },
};
