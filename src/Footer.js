import React from "react";

// FOOTER ELEMENT
function Footer() {
  const footerStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
  };

  return (
    <footer className="text-center mt-20" style={footerStyle}>
      <p style={{fontFamily: "cursive", fontWeight: "bolder", fontSize: "20px"}}>© 2025 Mikita's CI/CD Practice 🚀</p>
    </footer>
  );
}

export default Footer;
