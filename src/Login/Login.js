import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase Configration/Firebase";
import InternalHeader from "../InternalHeader/InternalHeader";
import "./Login.css";
import "./LoginResposive.css";

import { useTranslation } from "react-i18next";

const Login = () => {
  // auth.onAuthStateChanged(userr=>{
  //   console.log(userr)
  // })
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userr, setUserr] = useState({});
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState({
    userEmailError: null,
    userPasswordError: null,
  });
  const AddingEmail = (evt) => {
    if (evt.target.name === "userEmail") {
      setUser({
        ...user,
        userEmail: evt.target.value,
      });
      setError({
        ...error,
        userEmailError:
          evt.target.value.length === 0 ? "this field is required" : null,
      });
    } else if (evt.target.name === "userPassword") {
      setUser({
        ...user,
        userPassword: evt.target.value,
      });
      setError({
        ...error,
        userPasswordError:
          evt.target.value.length === 0
            ? "this field is required"
            : evt.target.value.length < 8
            ? "pass is less than 8"
            : null,
      });
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUserr(currentUser);
    // console.log(currentUser)
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const userData = JSON.stringify(userr);

      localStorage.setItem("user", userData);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <InternalHeader/> */}
      <div className="login">
        <div className="container">
          <div className="link3">
            <span>&lt;</span>
            <a href=""> {t("162.label")} </a>
          </div>
          <div className="content ">
            <div className="left">
              <div className="imgbg">
                <h1>{t("150.label")}</h1>
                <p>{t("151.label")}</p>
                <ul>
                  <li>{t("152.label")}</li>
                  <li>{t("153.label")}</li>
                  <li>{t("154.label")}</li>
                </ul>
                <Link to="/register">
                  <button className="btn btn-light border-2 button1">
                    {t("155.label")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="rightLogin">
              <h1>{t("156.label")}</h1>
              <h2>{t("157.label")}</h2>

              <form autoComplete="off" className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                  name="userEmail"
                  value={user.userEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                    AddingEmail(event);
                  }}
                />
                <div className="container d-flex justify-content-center ">
                  <small className="text-danger">{error.userEmailError}</small>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                  name="userPassword"                 
                  value={user.userPassword}
                  
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                    AddingEmail(event);
                  }}
                />
                <div className="container d-flex justify-content-center ">
                  <small className="text-danger">
                    {error.userPasswordError}
                  </small>
                </div>
                <div className="link">
                  <a href="#">{t("158.label")}</a>
                </div>
                <Link to='/home'><button className="btn btn-primary button2" onClick={login}>
                  {t("159.label")}
                </button></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
     
      <footer className="footerLogin">
        <p>
          {t("160.label")} <a href="">{t("161.label")} </a>
        </p>
      </footer>
    </>
  );
};
export default Login;
