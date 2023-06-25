import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Base64 } from "js-base64";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import FormData from "form-data";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
  const baseUrl = "http://localhost:8080/api";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [isPending, setIsPending] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  let navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    var form = new FormData();

    form.append("username", username);

    form.append("password", password);

    // const user = {username, password}

    console.log(username);

    //setLoginFailed(true);

    setIsPending(true);

    var requestOptions = {
      method: "POST",

      body: form,

      redirect: "follow",

      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const login = fetch("http://localhost:8080/api/login", requestOptions)

      .then((response => response.json()))
      .then(data => {
        if (data.access_token) {
          setToken(data.access_token)
          goHome();
        } else {
          setLoginFailed(true);
          setIsPending(false);
        }
      } )

      .catch((error) => console.log("error", error));
  };

  return (
        <div className="login">
          <h2>Login to record a cancellation.</h2>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {!isPending && <button>Login</button>}
            {isPending && <button disabled>Loading...</button>}
          </form>
          <Popup open={loginFailed} modal>
            {() => (
              <div className="modal">
                <button
                  onClick={() => {
                    setLoginFailed(false);
                    setIsPending(false);
                  }}
                >
                  close
                </button>
                <div className="header">login failed</div>
                <div className="content">...umm try again</div>
              </div>
            )}
          </Popup>
        </div>
  );
};

export default Login;

//Login.PropTypes = {
//  setToken: PropTypes.func.isRequired,
//};