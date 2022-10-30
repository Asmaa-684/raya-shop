import React,{useState, useEffect} from "react";
import './Account_Overview.css';
import { FiEdit } from "react-icons/fi";
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {auth, db} from '../Firebase Configration/Firebase'
import { useTranslation } from "react-i18next";
import { collection, query, where, getDocs } from 'firebase/firestore';
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
  const Account_Overview= () => {
const [userData, setUserData] =useState({})
const [email, setEmail] = useState("");
const [FirstName,setFirstName] = useState("")
const [LastName,setLastName] = useState("")
      const { t, i18n } = useTranslation();

      // function GetCurrentUser(){
      //   const [user, setUser] = useState('')
      //   const userCollectionRef = collection(db,"users")

        
      //   return user
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setEmail(user.email);
          }
        });
        // getproduct();
       
      },[]);
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
      }
      const updateUserData = () => {

        onAuthStateChanged(auth, (user) => {
    
          if (user) {
    
    
        updateDoc(doc(db, "users", `${user.email}`), {
    
          Name: FirstName,
    
        
    
        }).then(() => {
    
          setFirstName("")
    
          getUser()
    
    
    
          }).catch((error) => {
    
            console.log(error.messege);
    
          })
    
        } else {
    
          console.log("Error updating data")
    
        }
      });
    };

  return (
    <>
   
     
          
            <p className="account_h1 p-2">{t("328.label")}</p>
            <div className="account_details">
            <h4 className="text_h4">{t("329.label")}</h4>
            <div class="row g-3 pt-3 account_form">
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder={userData.Name}
                  onChange={(text) => setFirstName(text)}           
               
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder={userData.Phone}
                  readOnly
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder={userData.Email}
                readOnly
                />
              </div>
            </div>
            <div className="d-inline-flex edit_text">
            <FiEdit size={25} className="filledit" />
            <a href="#" className="">{t("330.label")} </a>
            </div>
            </div>

            <div>

            <h5 className="p-3 m-1 text_hh5">{t("331.label")}</h5>
            <p className="account_parag">
            {t("332.label")}
            </p>
             
            
             <div className="pt-5 account_arrow">
                <BsFillArrowRightSquareFill className="arrow" size={40} />
                <a href="#" className="text-browse">{t("333.label")}</a>
                </div>
             
              
            </div>
        
       
      
    </>
  );
}
export default Account_Overview;