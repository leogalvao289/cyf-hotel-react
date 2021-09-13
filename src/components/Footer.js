import React from "react";

const Footer = ({ footerArray }) => {
  return (
    <footer className="footer">
      <ul>
        {footerArray.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
