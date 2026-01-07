import { useEffect, useState } from "react";

export default function Hero() {
  const roles = ["AI Engineer", "Data Engineer", "Data Scientist","Software Engineer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 90);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 55);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1300);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section style={styles.hero}>
      {/* Animations */}
      <style>{`
        @keyframes greenPulse {
          0% {
            transform: scale(1);
            box-shadow:
              0 0 6px rgba(34,197,94,0.9),
              0 0 18px rgba(34,197,94,0.6),
              0 0 36px rgba(34,197,94,0.4);
          }
          50% {
            transform: scale(1.35);
            box-shadow:
              0 0 10px rgba(34,197,94,1),
              0 0 28px rgba(34,197,94,0.9),
              0 0 60px rgba(34,197,94,0.7);
          }
          100% {
            transform: scale(1);
            box-shadow:
              0 0 6px rgba(34,197,94,0.9),
              0 0 18px rgba(34,197,94,0.6),
              0 0 36px rgba(34,197,94,0.4);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(14px); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      {/* Availability */}
      <div style={styles.available}>
        <span style={styles.greenDot} />
        <span style={styles.availableText}>Available for work</span>
      </div>

      <h1 style={styles.name}>Ayesha Siddiq</h1>

      <h2 style={styles.role}>
        I am a{" "}
        <span style={styles.typing}>{text}</span>
        <span style={styles.cursor}>|</span>
      </h2>

      <p style={styles.description}>
        I build scalable data pipelines and deploy production-grade AI systems.
        Specializing in ML infrastructure, data engineering, and LLM applications.
      </p>

      {/* Social Icons */}
      <div style={styles.icons}>
        <a href="https://github.com/AyeshaSiddiq24" target="_blank" rel="noreferrer" style={styles.icon}>
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/ayesha-siddiq-aa2207201/" target="_blank" rel="noreferrer" style={styles.icon}>
          <LinkedIn />
        </a>
        <a href="mailto:siddiq.a@northeastern.edu" style={styles.icon}>
          <Mail />
        </a>
      </div>

      {/* Scroll Arrow */}
      <div style={styles.arrow}>↓</div>
    </section>
  );
}

/* ================= ICONS ================= */

const GitHub = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M12 1C5.9 1 1 5.9 1 12c0 4.9 3.2 9 7.6 10.4.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.2.7 2.8.5.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.7 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a9.8 9.8 0 015.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.4-2.6 5.4-5.1 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11 11 0 0023 12c0-6.1-4.9-11-11-11z"/>
  </svg>
);

const LinkedIn = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
  </svg>
);

const Mail = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

/* ================= STYLES ================= */

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 20px",
  },

  available: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "22px",
  },

  greenDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#22c55e",
    animation: "greenPulse 1.4s ease-in-out infinite",
  },

  availableText: {
    color: "#ffffff",
    fontSize: "14px",
  },

  name: {
    fontSize: "52px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  role: {
    fontSize: "22px",
    color: "#cbd5f5",
    marginBottom: "18px",
  },

  typing: {
    color: "#3b82f6",
    fontWeight: 600,
  },

  cursor: {
    marginLeft: "4px",
    animation: "blink 1s infinite",
  },

  description: {
    maxWidth: "720px",
    color: "#94a3b8",
    lineHeight: 1.6,
    marginBottom: "36px",
  },

  icons: {
    display: "flex",
    gap: "28px",
    marginBottom: "42px",
    color: "#94a3b8",
  },

  icon: {
    color: "#94a3b8",
    transition: "color 0.25s ease",
  },

  arrow: {
    fontSize: "26px",
    color: "#94a3b8",
    animation: "bounce 1.6s infinite",
  },
};
