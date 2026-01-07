

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* LEFT CONTENT */}
        <div style={styles.text}>
          <h2 style={styles.heading}>
            About Me<span style={{ color: "#3b82f6" }}>.</span>
          </h2>

          <p style={styles.subtitle}>
            I bridge the gap between complex data and actionable intelligence
            through robust engineering.
          </p>

          <p style={styles.paragraph}>
            As an engineer with a deep focus on{" "}
            <strong>Artificial Intelligence</strong> and{" "}
            <strong>Data Systems</strong>, I thrive on solving difficult
            technical challenges.
          </p>

          <p style={styles.paragraph}>
            My background combines rigorous academic research with hands-on
            industry experience. I don’t just train models — I build the
            infrastructure that makes them reliable, scalable, and valuable.
          </p>

          <p style={styles.paragraph}>
            When I’m not coding, I’m reading research papers on transformer
            architectures or optimizing distributed systems.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div style={styles.right}>
          {/* IMAGE WITH HOVER */}
          <div
            style={styles.imageWrapper}
            onMouseEnter={(e) => {
              e.currentTarget.firstChild.style.transform = "translateY(-6px)";
              e.currentTarget.firstChild.style.boxShadow =
                "0 30px 60px rgba(59,130,246,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.firstChild.style.transform = "translateY(0)";
              e.currentTarget.firstChild.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.35)";
            }}
          >
            <img
  src="/profile.jpg"
  alt="Ayesha Siddiq"
  style={styles.image}
/>

          </div>

          {/* SKILL BOXES */}
          <div style={styles.skillBox}>
            <h4 style={styles.skillTitle}>Data Engineering</h4>
            <p style={styles.skillText}>
              ETL Pipelines, Warehousing, Distributed Systems
            </p>
          </div>

          <div style={styles.skillBox}>
            <h4 style={styles.skillTitle}>Machine Learning</h4>
            <p style={styles.skillText}>
              Model Training, Fine-tuning, Deployment, MLOps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "120px 80px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "80px",
    alignItems: "center",
  },

  text: {
    color: "#cbd5f5",
  },

  heading: {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "12px",
    marginTop: "-40px", // 👈 moves heading UP slightly
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "28px",
    maxWidth: "520px",
  },

  paragraph: {
    color: "#94a3b8",
    lineHeight: 1.7,
    marginBottom: "18px",
    maxWidth: "520px",
  },

  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "28px",
  },

  imageWrapper: {
    transition: "all 0.3s ease",
  },

  image: {
    width: "260px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  skillBox: {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "14px",
    padding: "18px 22px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  skillTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "6px",
    color: "#e5e7eb",
  },

  skillText: {
    fontSize: "14px",
    color: "#94a3b8",
  },
};
