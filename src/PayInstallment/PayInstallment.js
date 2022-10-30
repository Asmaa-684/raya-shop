import React from 'react'
import './payInstallment.css'
import Footer from '../Footer/Footer'
import { FaCcMastercard } from "react-icons/fa";
import {RiVisaLine} from "react-icons/ri";
import { useTranslation } from "react-i18next";

    const PayInstallment = () => {

        const { t, i18n } = useTranslation();
  return (
    <>
 
    <div className='payInstallment py-5'>
        <div className='container'>
            <div className='payInstallmentContent d-flex flex-column justify-content-center align-items-center py-5'>
                <h1 className='py-2'>{t("17.label")}</h1>
                <h2  className='py-2'>{t("18.label")}</h2>
                <div className='pAndIcons'>
                    <p>{t("19.label")}</p>
                    <div className='icons'>
                    <RiVisaLine className='mx-3 fs-1'/>
                        <FaCcMastercard  className='mx-3 fs-1'/>
                    </div>
                </div>
                <form>
                    <label>{t("20.label")}</label>
                     <input className='form-control inId' placeholder='ex. 0000 0000 0000 0000' type="number"/>
                     <button className='btn border-2 button2'>{t("kd.label")}</button>
                </form>
                
                    
                    
                
            </div>
        </div>
    </div>

    </>
  )
}
export default PayInstallment;