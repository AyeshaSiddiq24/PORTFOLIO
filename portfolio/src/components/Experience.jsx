export default function Experience() {
  return (
    <section style={styles.section} id="experience">
      {/* Header */}
      <div style={styles.header}>


        <h2 style={styles.title}>
          Experience<span style={styles.dot}>.</span>
        </h2>

        <p style={styles.subtitle}>
          A timeline of my professional journey and contributions.
        </p>
      </div>

      {/* Content */}
      <div style={styles.grid}>
        {/* Work Experience */}
        <div>
          <h3 style={styles.columnTitle}>Work Experience</h3>

          <div style={styles.timelineItem}>
            <span style={styles.timelineDot}></span>
            <span style={styles.timelineLine}></span>

            <h4 style={styles.role}>Full-Stack Developer</h4>
            <span style={styles.company}>Headway Data Systems</span>
            <span style={styles.meta}>May 2023 – Feb 2024</span>

            <p style={styles.description}>
              Built a production website using React.js and Node.js. Developed a
              wedding application using MongoDB and REST APIs. Improved
              performance and reduced page load times. Integrated payment
              gateways to enable secure transactions.
            </p>
          </div>

          <div style={styles.timelineItem}>
            <span style={styles.timelineDot}></span>
            <span style={styles.timelineLine}></span>

            <h4 style={styles.role}>AI Engineer Intern</h4>
            <span style={styles.company}>Acmegrade</span>
            <span style={styles.meta}>May 2023 – July 2023</span>

            <p style={styles.description}>
              Built and evaluated supervised ML models (Iris classification).
              Developed a rule-based chatbot to understand conversational AI
              fundamentals. Gained hands-on experience with end-to-end ML
              workflows.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 style={styles.columnTitle}>Education</h3>

          <div style={styles.timelineItem}>
            <span style={styles.timelineDot}></span>
            <span style={styles.timelineLine}></span>

            <h4 style={styles.role}>
              Master of Science in Information Systems
            </h4>
            <span style={styles.company}>Northeastern University</span>
            <span style={styles.meta}>
              Boston, MA · Expected Dec 2026 · GPA: 3.6 / 4.0
            </span>

            <p style={styles.description}>
              Application Engineering and Development, Data Management &
              Database Design, Data Science using R, Web Design & UX, Program
              Structure & Algorithms.
            </p>
          </div>

          <div style={styles.timelineItem}>
            <span style={styles.timelineDot}></span>
            <span style={styles.timelineLine}></span>

            <h4 style={styles.role}>
              Bachelor of Engineering – Computer Science
            </h4>
            <span style={styles.company}>
              Muffakham Jah College of Engineering and Technology
            </span>
            <span style={styles.meta}>
              Hyderabad · Dec 2020 – June 2024 · GPA: 9.05 / 10
            </span>

            <p style={styles.description}>Focus: AI & Data Science</p>
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
    marginBottom: "90px",
  },

  kicker: {
    fontSize: "13px",
    letterSpacing: "2px",
    color: "#64748b",
    display: "block",
    marginBottom: "18px",
  },

  title: {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "14px",
  },

  dot: {
    color: "#4f8cff",
  },

  subtitle: {
    fontSize: "18px",
    color: "#94a3b8",
    maxWidth: "600px",
    lineHeight: 1.6,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "120px",
  },

  columnTitle: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "40px",
  },

  timelineItem: {
    position: "relative",
    paddingLeft: "32px",
    marginBottom: "56px",
  },

  timelineDot: {
    position: "absolute",
    left: "0",
    top: "6px",
    width: "10px",
    height: "10px",
    background: "#4f8cff",
    borderRadius: "50%",
  },

  timelineLine: {
    position: "absolute",
    left: "4px",
    top: "22px",
    width: "2px",
    height: "100%",
    background: "rgba(79, 140, 255, 0.25)",
  },

  role: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "4px",
  },

  company: {
    display: "block",
    color: "#4f8cff",
    fontSize: "15px",
    marginBottom: "4px",
  },

  meta: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "12px",
    display: "block",
  },

  description: {
    fontSize: "15px",
    color: "#cbd5f5",
    lineHeight: 1.7,
    maxWidth: "520px",
  },
};
