export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2026  Ayesha Siddiq | AI & Data Engineer | Built with React.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "120px",
    padding: "32px 0",
    borderTop: "1px solid #1f2937",
    textAlign: "center",
  },
  text: {
    fontSize: "14px",
    color: "#94a3b8",
  },
};
