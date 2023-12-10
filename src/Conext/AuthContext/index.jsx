import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({ capabilities: [] });
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user.capabilities.includes(capability);
  };

  const login = async (username, password) => {
    try {
      const loginRequest = await axios.post(
        "https://backendserver-h5d1.onrender.com/signin",
        {},
        {
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
          },
        }
      );
      validateToken(loginRequest.data.token);
    } catch (e) {
      setLoginState(false, null, user, e);
      console.error(e);
    }

  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log("Token Validation Error", e);
    }
  };

  const setLoginState = (loggedIn, token, user, error) => {
    cookie.save("auth", token);
    setLoggedIn(loggedIn);
    setToken(token);
    setUser(user);
    setError(error || null);
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
    // eslint-disable-next-line
  }, []);

  return (
    <LoginContext.Provider value={{ loggedIn, can, login, logout, user, error }} >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
