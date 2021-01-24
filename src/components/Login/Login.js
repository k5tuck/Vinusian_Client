import React from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import "./login.css";

function Login() {
  return (
    <>
      <LoginHeader />
      <div className="form-body">
        <div className="login-logo">
          <img src="/Logo(Emblem).png" alt="Vinusian Logo" />
        </div>
        <div>
          <h2 className="login-title">Please Login:</h2>
        </div>
        <div className="buttonContainer">
          <div className="loginButtons">
            <div className="firstloginButton">
              {/* Change href path */}
              <a href="#">
                <button>
                  <img
                    class="social-btn-icon"
                    alt="Login with Github"
                    src="https://hrcdn.net/community-frontend/assets/github-colored-1db995054b.svg"
                  />
                  <span>Login with Github</span>
                </button>
              </a>
            </div>
            <div>
              {/* Change href path */}
              <a href="#">
                <button>
                  <img
                    class="social-btn-icon"
                    alt="Login with LinkedIn"
                    src="https://hrcdn.net/community-frontend/assets/linkedin-colored-1db195795c.svg"
                  />

                  <span>Login with LinkedIn</span>
                </button>
              </a>
            </div>
            <div className="lastloginButton">
              <a href="#">
                <button>
                  <img
                    class="social-btn-icon"
                    alt="Login with Google"
                    src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg"
                  />

                  <span>Login with Google</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
}

export default Login;
