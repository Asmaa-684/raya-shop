import React from 'react'
import './InternalHeader.css'
import { GrSecure } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';

import { useTranslation } from "react-i18next";

  const InternalHeader= () => {

      const { t, i18n } = useTranslation();
  


  return (
    <div className='InternalHeader'>
        <div className='container'>
            <div className='InternalHeaderContent'>
                <div>
                    <AiFillLock color='white' className='AiFillLock'/>
                    <span>{t("175.label")}</span>
                </div>
                <div><img src={require('../assets/Logo.jpg')}/></div>
                <div> <FiPhoneCall className='FiPhoneCall'/> <span>{t("176.label")}</span></div>
            </div>
        </div>
    </div>
  )
}
export default  InternalHeader;