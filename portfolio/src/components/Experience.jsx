import useScreen from "../hooks/useScreen";

export default function Experience() {
  const { isMobile, isTablet } = useScreen();
  const styles = getStyles(isMobile, isTablet);

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

          <TimelineItem
            role="Full-Stack Developer"
            company="Headway Data Systems"
            meta="May 2023 – Feb 2024"
            description="Built a production website using React.js and Node.js. Developed a wedding application using MongoDB and REST APIs. Improved performance and reduced page load times. Integrated payment gateways to enable secure transactions."
          />

          <TimelineItem
            role="AI Engineer Intern"
            company="Acmegrade"
            meta="May 2023 – July 2023"
            description="Built and evaluated supervised ML models (Iris classification). Developed a rule-based chatbot to understand conversational AI fundamentals. Gained hands-on experience with end-to-end ML workflows."
          />
        </div>

        {/* Education */}
        <div>
          <h3 style={styles.columnTitle}>Education</h3>

          <TimelineItem
            role="Master of Science in Information Systems"
            company="Northeastern University"
            meta="Boston, MA · Expected Dec 2026 · GPA: 3.6 / 4.0"
            description="Application Engineering and Development, Data Management & Database Design, Data Science using R, Web Design & UX, Program Structure & Algorithms."
          />

          <TimelineItem
            role="Bachelor of Engineering – Computer Science"
            company="Muffakham Jah College of Engineering and Technology"
            meta="Hyderabad · Dec 2020 – June 2024 · GPA: 9.05 / 10"
            description="Focus: Artificial Intelligence & Data Science"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */

function TimelineItem({ role, company, meta, description }) {
  return (
    <div style={timeline.item}>
      <span style={timeline.dot}></span>
      <span style={timeline.line}></span>

      <h4 style={timeline.role}>{role}</h4>
      <span style={timeline.company}>{company}</span>
      <span style={timeline.meta}>{meta}</span>

      <p style={timeline.description}>{description}</p>
    </div>
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
    },

    header: {
      marginBottom: isMobile ? "60px" : "90px",
    },

    title: {
      fontSize: isMobile ? "30px" : "42px",
      fontWeight: 700,
      marginBottom: "14px",
    },

    dot: {
      color: "#4f8cff",
    },

    subtitle: {
      fontSize: isMobile ? "16px" : "18px",
      color: "#94a3b8",
      maxWidth: "600px",
      lineHeight: 1.6,
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "64px" : "120px",
    },

    columnTitle: {
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "40px",
    },
  };
}

/* ================= SHARED TIMELINE STYLES ================= */

const timeline = {
  item: {
    position: "relative",
    paddingLeft: "32px",
    marginBottom: "56px",
  },

  dot: {
    position: "absolute",
    left: "0",
    top: "6px",
    width: "10px",
    height: "10px",
    background: "#4f8cff",
    borderRadius: "50%",
  },

  line: {
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
