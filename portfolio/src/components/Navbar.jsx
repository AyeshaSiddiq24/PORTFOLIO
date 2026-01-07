import { useState } from "react";
import useScreen from "../hooks/useScreen";

export default function Navbar() {
  const { isMobile, isTablet } = useScreen();
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  const styles = getStyles(isMobile, isTablet);

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
      {/* LOGO */}
      <div style={styles.logo}>Portfolio.</div>

      {/* DESKTOP LINKS */}
      {!isMobile && (
        <div style={styles.links}>
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={getLinkStyle(item)}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button style={styles.resume}>Resume</button>
        </div>
      )}

      {/* MOBILE HAMBURGER */}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setOpen(!open)}>
          ☰
        </div>
      )}

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div style={styles.mobileMenu}>
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button style={styles.mobileResume}>Resume</button>
        </div>
      )}
    </nav>
  );
}

/* ================= RESPONSIVE STYLES ================= */

function getStyles(isMobile, isTablet) {
  return {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      padding: isMobile
        ? "16px 20px"
        : isTablet
        ? "20px 48px"
        : "22px 120px",

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

    hamburger: {
      fontSize: "22px",
      color: "#e5e7eb",
      cursor: "pointer",
    },

    mobileMenu: {
      position: "absolute",
      top: "64px",
      right: "20px",
      background: "rgba(11, 18, 32, 0.95)",
      border: "1px solid #1f2937",
      borderRadius: "14px",
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      minWidth: "160px",
    },

    mobileLink: {
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: "15px",
    },

    mobileResume: {
      marginTop: "8px",
      background: "rgba(59, 130, 246, 0.15)",
      color: "#3b82f6",
      border: "none",
      padding: "10px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      cursor: "pointer",
    },
  };
}
