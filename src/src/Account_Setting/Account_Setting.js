import React from 'react';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephoneFill} from "react-icons/bs";
import {RiLockPasswordLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import './Account_Setting.css'
import { useTranslation } from "react-i18next";

const Account_Setting= () => {

    const { t, i18n } = useTranslation();

  return (
    <>
 
         <p className="account_h1 p-2 d-block">{t("334.label")}</p>

         <h4 className="text_h4">{t("335.label")}</h4>
         <div className="d-flex justify-content-between aligh-items-center">
          <div className=''>
            <dt className="setting p-2">
            <BsPersonFill size={25}/>
            <span className="mx-4 text-secondary-500">{t("336.label")}</span>
            </dt>
            <dt className="setting p-2 mt-5">
            <AiOutlineMail size={25}/>
                <span className="pl-2 mx-4 text-secondary-500">{t("337.label")}</span>            
            </dt>
            </div>
            <div className=' '>
            <dt>
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">{t("338.label")}</a>
            
                </dt>
              <dt className="mt-5 p-2">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">{t("339.label")}</a>
            
                </dt>
            </div>
            </div>
            <div className="line p-10">
            <h4 className="pt-5 text_h4">{t("340.label")}</h4>
            <div className="d-flex justify-content-between aligh-items-center">
            <div>
                <dt className="setting p-2">
                <BsTelephoneFill size={25}/>
                <span className="mx-4 text-secondary-500">{t("341.label")}</span>
                </dt>
                <dt className="setting p-2 mt-5">
                    <RiLockPasswordLine size={25}/>
                    <span className="mx-4 text-secondary-500">{t("342.label")}</span>
                    </dt>
            </div>
            <div>
                
                    <dt className="password">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">{t("343.label")}</a>
            
                </dt>
            </div>
            </div>
            </div>
         
       
    </>
  )
}
export default Account_Setting;