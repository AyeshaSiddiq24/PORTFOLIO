import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  const getLinkStyle = (name) => ({
    textDecoration: "none",
    color: hovered === name ? "#3b82f6" : "#94a3b8",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.2s ease",
  });

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Portfolio.</div>

      <div style={styles.links}>
        <a
          href="#about"
          style={getLinkStyle("about")}
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          About
        </a>

        <a
          href="#experience"
          style={getLinkStyle("experience")}
          onMouseEnter={() => setHovered("experience")}
          onMouseLeave={() => setHovered(null)}
        >
          Experience
        </a>

        <a
          href="#projects"
          style={getLinkStyle("projects")}
          onMouseEnter={() => setHovered("projects")}
          onMouseLeave={() => setHovered(null)}
        >
          Projects
        </a>

        <a
          href="#contact"
          style={getLinkStyle("contact")}
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          Contact
        </a>

        <button style={styles.resume}>Resume</button>
      </div>
    </nav>
  );
}

const styles = {
navbar: {
  position: "sticky",
  top: 0,
  zIndex: 1000,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "28px 64px",

  background: "rgba(11, 18, 32, 0.85)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #1f2937",
},


  logo: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#e5e7eb",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
  },

  resume: {
    background: "rgba(59, 130, 246, 0.15)",
    color: "#3b82f6",
    border: "none",
    padding: "10px 18px",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },
};
