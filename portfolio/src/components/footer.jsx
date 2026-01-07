import useScreen from "../hooks/useScreen";

export default function Footer() {
  const { isMobile, isTablet } = useScreen();
  const styles = getStyles(isMobile, isTablet);

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2026 Ayesha Siddiq | AI & Data Engineer | Built with React.
      </p>
    </footer>
  );
}

/* ================= STYLES ================= */

function getStyles(isMobile, isTablet) {
  return {
    footer: {
      marginTop: isMobile ? "80px" : "120px",
      padding: isMobile
        ? "24px 20px"
        : isTablet
        ? "28px 48px"
        : "32px 120px",
      borderTop: "1px solid #1f2937",
      textAlign: "center",
    },

    text: {
      fontSize: isMobile ? "13px" : "14px",
      color: "#94a3b8",
      lineHeight: 1.6,
    },
  };
}
