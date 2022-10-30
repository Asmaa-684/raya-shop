import React, { useState } from "react";
import { Link } from "react-router-dom";
import InternalHeader from "../InternalHeader/InternalHeader";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { auth, db } from "../Firebase Configration/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc,setDoc ,doc} from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

   const createUser = async  () => {
    // console.log(name,email)
   await setDoc(doc(db, `users/${email}`), {
      Name: name,
      Email: email,
      Password: password,
      Phone: phone,
      order: [],
      wishlist: [],
      address: [],
    });
  };
 
  const [userr, setUserr] = useState({});
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
  });
  const [error, setError] = useState({
    userNameError: null,
    userEmailError: null,
    userPasswordError: null,
    userPhoneError: null,
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
    } else if (evt.target.name === "userName") {
      setUser({
        ...user,
        userName: evt.target.value,
      });
      setError({
        ...error,
        userNameError:
          evt.target.value.length === 0 ? "this field is required" : null,
      });
    } else if (evt.target.name === "userPhone") {
      setUser({
        ...user,
        userPhone: evt.target.value,
      });
      setError({
        ...error,
        userPhoneError:
          evt.target.value.length === 0 ? "this field is required" : null,
      });
    }
    onAuthStateChanged(auth, (currentUser) => {
      setUserr(currentUser);
    });
  };
  const signup =  (event) => {
  event.preventDefault()
    createUser();
    try {       
      const user =  createUserWithEmailAndPassword(
        auth,
        email,
       password
      );
      
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <InternalHeader/> */}
      {/* <InternalHeader/> */}
      <div className="register">
        <div className="container">
          <div className="link3">
            <span>&lt;</span>
            <Link to="/login"> {t("174.label")}</Link>
          </div>
          <div className="content ">
            <div className="rightRigister">
              <h1>{t("163.label")} </h1>
              <h2>{t("164.label")}</h2>
              <form autoComplete="off" onSubmit={(event)=>signup(event)}>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder={t("168.label")}
                  onChange={(event) => {
                    setName(event.target.value);
                    AddingEmail(event);
                  }}
                  name="userName"
                  value={user.userName}
                />
                <div className="container d-flex justify-content-center ">
                  <small className="text-danger">{error.userNameError}</small>
                </div>

                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder={t("169.label")}
                  name="userEmail"
                  value={user.userEmail}
                  onChange={(event) => {
                    setEmail(event.target.value);
                   
                    AddingEmail(event);
                  }}
                />
                <div className="container d-flex justify-content-center ">
                  <small className="text-danger">{error.userEmailError}</small>
                </div>

                <input
                  type="number"
                  required
                  className="form-control"
                  placeholder={t("170.label")}
                  name="userPhone"
                  value={user.userPhone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    AddingEmail(event);
                  }}
                />
                <div className="container d-flex justify-content-center ">
                  <small className="text-danger">{error.userPhoneError}</small>
                </div>
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder={t("171.label")}
                  name="userPassword"
                  value={user.userPassword}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  
                    AddingEmail(event);
                  }}
                />
                <div className="container d-flex justify-content-center ">
                  <small className="text-danger">
                    {error.userPasswordError}
                  </small>
                </div>

                <button className="btn button2Register">
                  {t("163.label")}
                </button>
              </form>
            </div>
            <div className="left">
              <div className="imgbg d-flex">
                <h1>{t("165.label")}</h1>
                <p>{t("166.label")}</p>
                <Link to="/login">
                  <button className="btn btn-light border-2 button1">
                    {t("167.label")}
                  </button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footerRegister">
        <p>
          {t("172.label")}
          <a href="">{t("173.label")}</a>
        </p>
      </footer>
    </>
  );
};
export default Register;
