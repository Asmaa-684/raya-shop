import React,{useContext} from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import cookies from "js-cookie";

const languages= [
 
  {
    code: 'en',
    name:'English',
    
  }
  , {
    code: 'ar',
    name:'العربية',
   dir:'rtl',
  },
 ]
 function LanguageSelector(){
 const { t, i18n } = useTranslation();
 const currentLanguageCode = cookies.get('i18next') || 'en'
   const currentLanguage= languages.find(l => l.code === currentLanguageCode )
useEffect(() =>{
document.body.dir = currentLanguage.dir || 'ltr'
},[currentLanguage])

    const changeLanguage = (event) => {

    i18n.changeLanguage(event.target.value);
  }
  return (
<>
{/* //     <div
//      onChange={changeLanguage}>

//       <input type="radio" value="en" name="language" defaultChecked />English 
   

// <input type="radio" value="ar" name="language" />Arabic

   
// </div> */}
</>
);
 
 }



export default LanguageSelector;