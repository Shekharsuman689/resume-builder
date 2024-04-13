import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";;
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialIcons}>
        <a
          className="ss"
          href="https://www.linkedin.com/in/shekhar-suman-933a91279/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={styles.icon} />
        </a>
        <a
          href="https://twitter.com/shekharsuman689"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter style={styles.icon} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail style={styles.icon} />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp style={styles.icon} />
        </a>
      </div>
      <p style={styles.copywrite}>
        © 2024 All Rights Reserved. Made with ❤️ by Shekhar
        Suman
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "Grey",
    color: "black",
    fontSize: "22px",
    textAlign: "center",
    padding: "0 0 1px 0"
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "30px",
    margin: "25px 15px",
    color: "green",
  },
  copywrite: {
    fontSize: "15px",
    margin: "10px",
  },
};

export default Footer;
