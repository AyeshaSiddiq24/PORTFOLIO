import useScreen from "../hooks/useScreen";

export default function Contact() {
  const { isMobile, isTablet } = useScreen();

  const styles = getStyles(isMobile, isTablet);

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.grid}>
        {/* LEFT CONTENT */}
        <div>
          <h2 style={styles.heading}>
            Get in Touch <span style={{ color: "#3b82f6" }}>.</span>
          </h2>

          <p style={styles.subtitle}>
            I'm open to full-time opportunities, internships, and collaborations
            in AI and data engineering.
          </p>

          <div style={styles.underline} />

          {/* CONTACT CARDS */}
          <div style={styles.cardList}>
            <ContactCard
              icon={<MailIcon />}
              label="Email me at"
              value="siddiq.a@northeastern.edu"
            />

            <ContactCard
              icon={<LinkedInIcon />}
              label="Connect on"
              value="linkedin.com/in/ayesha-siddiq-aa2207201"
            />

            <ContactCard
              icon={<GitHubIcon />}
              label="Check my code on"
              value="github.com/AyeshaSiddiq24"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <form style={styles.form}>
          <div style={styles.formGrid}>
            <div>
              <label style={labelStyle}>Name</label>
              <input style={inputStyle} placeholder="Your name" />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} placeholder="your.email@example" />
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, height: "120px", resize: "none" }}
              placeholder="How can we collaborate?"
            />
          </div>

          <button type="submit" style={styles.button}>
            Send Message ✈️
          </button>
        </form>
      </div>
    </section>
  );
}

/* ================= CONTACT CARD ================= */

function ContactCard({ icon, label, value }) {
  return (
    <div
      style={stylesCard.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#3b82f6";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1f2937";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ width: "22px", color: "#3b82f6" }}>{icon}</div>
      <div>
        <p style={stylesCard.label}>{label}</p>
        <p style={stylesCard.value}>{value}</p>
      </div>
    </div>
  );
}

/* ================= ICONS ================= */

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16v16H4z" />
      <path d="M4 4l8 8 8-8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zm7.5-17h4.8v2.3h.1c.67-1.3 2.3-2.7 4.7-2.7 5 0 5.9 3.3 5.9 7.6V24h-5v-7.8c0-1.9 0-4.3-2.7-4.3s-3.1 2-3.1 4.1V24h-5V7z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.8 2.2 2.8 2.8.1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.3 10.3 0 015.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1 .8 2v3c0 .3.2.7.8.6a11.7 11.7 0 007.9-10.9C23.5 5.8 18.3.5 12 .5z" />
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
      maxWidth: "1400px",
      margin: "0 auto",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "48px" : "64px",
      alignItems: "flex-start",
    },

    heading: {
      fontSize: isMobile ? "28px" : "36px",
      fontWeight: 700,
    },

    subtitle: {
      color: "#94a3b8",
      marginTop: "12px",
      maxWidth: "420px",
      lineHeight: 1.6,
    },

    underline: {
      width: "60px",
      height: "3px",
      background: "#1d4ed8",
      marginTop: "24px",
    },

    cardList: {
      marginTop: "48px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },

    form: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid #1f2937",
      borderRadius: "18px",
      padding: "32px",
    },

    formGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "16px",
    },

    button: {
      marginTop: "24px",
      background: "#3b82f6",
      color: "#fff",
      border: "none",
      padding: "14px 22px",
      borderRadius: "12px",
      fontSize: "15px",
      fontWeight: 500,
      cursor: "pointer",
    },
  };
}

/* ================= SHARED ================= */

const stylesCard = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "18px 20px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid #1f2937",
    borderRadius: "14px",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
  label: {
    fontSize: "13px",
    color: "#94a3b8",
  },
  value: {
    fontWeight: 500,
  },
};

const labelStyle = {
  display: "block",
  fontSize: "13px",
  color: "#94a3b8",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid #1f2937",
  background: "rgba(0,0,0,0.3)",
  color: "#e5e7eb",
  outline: "none",
};
