import React, { useState } from "react";
import "./LoginRegister.css";
import NavBar from "./NavBar";

const LoginRegister = (props) => {
  const [addclass, setAddClass] = useState("");

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(emailRegex.test(newEmail));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }
  };

  return (
    <>
      <NavBar />
      <div className="fig">
        <div className={`container1 ${addclass}`} id="container1">
          <div>
            <div className="form-container  sign-up-container">
              <form className="form" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  className={`input ${emailValid ? "" : "input-error"}`}
                  placeholder="EMAIL"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  className="input"
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="CONFIRM PASSWORD"
                  className="input"
                />
                <button type="submit">REGISTER</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                  type="email"
                  name="email"
                  className={`input ${emailValid ? "" : "input-error"}`}
                  placeholder="EMAIL"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  className="input"
                />
                <button type="submit">LOGIN</button>
              </form>
            </div>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => setAddClass("")}
                >
                  GO TO LOGIN
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setAddClass("right-panel-active")}
                >
                  GO TO REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
