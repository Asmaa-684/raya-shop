import React from 'react';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import './Side_Account.css'
import { useTranslation } from "react-i18next";
import { auth } from '../Firebase Configration/Firebase';
import {  useHistory } from 'react-router-dom';


const Side_Account= () => {

    const history = useHistory()

    const { t, i18n } = useTranslation();

    const handleLogout = () =>{
      auth.signOut().then(()=>{
        history.push("/login")
      })
    }

  return (
    <>
   
            <div className="account_number border-b border-primary-100">
              <h6>{t("304.label")}, Rewan</h6>
              <p className="account_paragraph d-flex items-center">
              {t("305.label")}
                <a href="#" className="d-flex items-center info_a ">
                  <div className="info_icon">
                    <i className="fa-solid fa-info"></i>
                  </div>
                </a>
              </p>
              <p className="account_paragraph">
              {t("306.label")}
                <span
                  data-after-content="EGP"
                  className="inline-flex items-center "
                >
                  0 EGP
                </span>
              </p>
            </div>
            <div className="account_list d-block">
              <ul className="account_ul">
                <li className="pb-4 pt-4 text-primary-700  is-active">
                  <a className="d-flex items-center account_a">
                    <BsPersonFill size={25} />
                    <span className="ml-4 ">{t("307.label")}</span>
                  </a>
                </li>
                <li className="pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <FiShoppingBag size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                    {t("308.label")}
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1 ">
                  <a className="d-flex items-center account_a">
                    <MdEditCalendar size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold account_span">
                    {t("309.label")}
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <BsFillHeartFill size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                    {t("310.label")}
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1  ">
                  <a className="d-flex items-center account_a">
                    <HiLocationMarker size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                    {t("311.label")}
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1 ">
                  <a className="d-flex items-center account_a">
                    <AiFillSetting size={25} />
                    <span className="ml-4 whitespace-nowrap lg:whitespace-normal text-sm font-bold  account_span">
                    {t("312.label")}
                    </span>
                  </a>
                </li>
                <li className=" pb-4 pt-1" >
                  <a className="d-flex items-center account_a">
                    <RiLogoutBoxRLine size={40} className="logout_icon"onClick={handleLogout} />
                    <span className=" font-bold account_logout">{t("313.label")}</span>
                  </a>
                </li>
              </ul>
            </div>
          
    </>
  )
}
export default  Side_Account;