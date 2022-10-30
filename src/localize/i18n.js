import i18n from "i18next";
 import Backend from "i18next-http-backend";
 import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
 import translationEN from "../local/translationEN.json"
 import translationAR from "../local/translationAR.json";
import { useEffect } from "react";
import cookie from "js-cookie";
import HttpApi from 'i18next-http-backend'


i18n

.use(HttpApi) 
 .use(LanguageDetector)    
 .use(initReactI18next)    
 .init({
  resources : {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR,
    dir:"rtl"
  }
},
 
supportedLngs: ['en' , 'ar'],
    fallbackLng: "en",
  
detection:{
  order: [ 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
caches:['cookie'],
},

  });


export default i18n;


