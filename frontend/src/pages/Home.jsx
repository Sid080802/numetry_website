import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Website</h1>
      <p style={styles.paragraph}>
        We provide top-notch services to help you achieve your goals. Explore our website to learn more.
      </p>
    </div>
  );
};

// Inline styles (optional)
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default Home;
