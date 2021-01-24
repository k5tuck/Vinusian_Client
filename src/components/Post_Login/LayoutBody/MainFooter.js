import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainFooter() {
  return (
    <div className="main-footer">
      <div>
        <ul className="footer-legal-links">
          <a href="#">
            <li>Privacy Policy</li>
          </a>
          <a href="#">
            <li>Terms of Service</li>
          </a>
          <a href="#">
            <li>Cookie Preferences</li>
          </a>
        </ul>
      </div>
      <div className="main-bottom-footer">
        <p>Copyright &copy; 2021 </p>
        <ul className="footer-social-icons">
          <li className="social-icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainFooter;
