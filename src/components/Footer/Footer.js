import React from "react";
import "../Footer/footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="fadeBottom">
        <p class="footer-text">
          Made with
          <img
            alt="❤️"
            draggable="false"
            src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          />
          by Aakash Brahmbhatt
        </p>
      </div>
    </div>
  );
}

export default Footer;
