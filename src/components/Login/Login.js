import React from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import "./Login.css";

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
        <div className="loginButtons">
          <div className="firstloginButton">
            <a href="#">
              <button>
                <span>
                  <img src="" alt="" />
                </span>
                <span>Login with Github</span>
              </button>
            </a>
          </div>
          <div>
            <a href="#">
              <button>
                <span>
                  <span>
                    <i class="fab fa-github"></i>
                  </span>
                </span>
                <span>Login with LinkedIn</span>
              </button>
            </a>
          </div>
          <div className="lastloginButton">
            <a href="#">
              <button>
                <span>
                  <img src="" alt="" />
                </span>
                <span>Login with Google</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <LoginFooter />
    </>
  );
}

export default Login;
