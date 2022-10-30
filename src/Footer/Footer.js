import React from 'react'
import { useTranslation } from "react-i18next";
import './Footer.css'
import './FooterResponsive.css'
import { FaApple,FaGooglePlay,FaCcMastercard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRightSquareFill,BsInstagram } from "react-icons/bs";
import { RiFacebookFill ,RiVisaLine} from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
// export default function Footer() {
    const Footer= () => {

        const { t, i18n } = useTranslation();
  return (
    <>
    <footer className='footer'>
        <div className='container'>
            <div className='footerContent'>
                <div className='footerUpper'>
                    <div>
                        <h4>{t("1.label")}</h4>
                        <p>{t("2.label")}</p>
                        <p>{t("3.label")}</p>
                        <p>{t("4.label")}</p>
                    </div>
                    <div>
                        <h4>{t("5.label")}</h4>
                        <p>{t("6.label")}</p>
                        <p>{t("7.label")}</p>
                        <p>{t("8.label")}</p>
                    </div>
                    <div>
                        <h4>{t("9.label")}</h4>
                        <p>{t("10.label")}</p>
                        <p>{t("11.label")}</p>
                        <p>{t("12.label")}</p>
                    </div>
                    <div>
                        <h4>{t("13.label")}</h4>
                        <p><FaGooglePlay className='FaApple fs-6'/>Google Play</p>
                        <p> <FaApple className='FaApple'/>  App Store</p>
                        
                    </div>
                    <div >
                        <h4>{t("14.label")}</h4>
                        <p>{t("15.label")}</p>
                
                        <div className='MdOutlineEmailDiv'>
                            <MdOutlineEmail className='MdOutlineEmail'/>
                            <input type="text" className='inputFooter' placeholder='Email-(ex@gmail.com)'/>
                             <BsArrowRightSquareFill className='BsArrowRightSquareFill'/>
                        </div>
                    </div>
                </div>


                <div className='footerLower'>
                    <div>
                        <BsInstagram className='mx-3 fs-3'/>
                        <RiFacebookFill className='mx-3 fs-3'/>
                        <GrLinkedinOption className='mx-3 fs-3'/>
                    </div>
                    <div>{t("16.label")}</div>
                    <div>
                        <RiVisaLine className='mx-3 fs-1'/>
                        <FaCcMastercard  className='mx-3 fs-1'/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}
export default Footer;