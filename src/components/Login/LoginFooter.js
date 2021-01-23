import React from "react";

function LoginFooter() {
  return (
    <div className="lfooter">
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
      <div className="lbottom-footer">
        <p>Copyright &copy; 2021 </p>
        <ul className="footer-social-icons">
          <li className="social-icon">
            <a href="#">
              <img src="" alt="LinkedIn" />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              <img src="" alt="Twitter" />
            </a>
          </li>
          <li className="social-icon">
            <a href="#">
              {/* <img src="" alt="" /> */}
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginFooter;
