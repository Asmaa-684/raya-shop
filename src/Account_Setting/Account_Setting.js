import React, { useState, useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import "./Account_Setting.css";
import { useTranslation } from "react-i18next";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../Firebase Configration/Firebase";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

const Account_Setting = () => {
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");

  const { t, i18n } = useTranslation();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
    // getproduct();
  }, []);
  useEffect(() => {
    console.log(email);
    if (email) {
      getUser();
    }
  }, [email]);
  // }
  // const loggedUser = GetCurrentUser()
  // if(loggedUser){console.log(loggedUser[0])}

  const getUser = async () => {
    await getDoc(doc(db, "users", email)).then((res) => {
      console.log(res.data());
      setUserData(res.data());
    });
  };
  const updateUserData = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateDoc(doc(db, "users", `${user.email}`), {
          Name: FirstName,
        })
          .then(() => {
            setFirstName("");

            getUser();
          })
          .catch((error) => {
            console.log(error.messege);
          });
      } else {
        console.log("Error updating data");
      }
    });
  };

  return (
    <>
      <p className="account_h1 p-2 d-block">{t("334.label")}</p>

      <h4 className="text_h4">{t("335.label")}</h4>
      <div className="d-flex justify-content-between aligh-items-center">
        <div className="">
          <dt className="setting p-2">
            <BsPersonFill size={25} />
            <p className="mx-4 text-secondary-500">{t("336.label")}{userData.Name}</p>
          </dt>
          <dt className="setting p-2 mt-5">
            <AiOutlineMail size={25} />
            <span className="pl-2 mx-4 text-secondary-500">
              {t("337.label")}  {userData.Email}
            </span>
          </dt>
        </div>
        <div className="setting ">
          <dt>
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">
              {t("338.label")}
            </a>
          </dt>
          <dt className="setting mt-5 p-2">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">
              {t("339.label")}
            </a>
          </dt>
        </div>
      </div>
      <div className="line p-10">
        <h4 className="pt-5 text_h4">{t("340.label")}</h4>
        <div className="d-flex justify-content-between aligh-items-center">
          <div>
            <dt className="setting p-2">
              <BsTelephoneFill size={25} />
              <span className="mx-4 ">{t("341.label")}  {userData.Phone}</span>
            </dt>
            <dt className="setting p-2 mt-5">
              <RiLockPasswordLine size={25} />
              <span className="mx-4 text-secondary-500">{t("342.label")}  {userData.Password}</span>
            </dt>
          </div>
          <div>
            <dt className="password">
              <FiEdit size={25} className="filledit" />
              <a href="#" className="">
                {t("343.label")}
              </a>
            </dt>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account_Setting;
