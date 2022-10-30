import React,{useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';

import InternalHeader from '../InternalHeader/InternalHeader';
import './Login.css';
import './LoginResposive.css'


  
  import { useTranslation } from "react-i18next";

  const Login= (props) => {
          
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');
    const auth = getAuth();
    const history = useHistory()
  
   const handleLogin =(e)=>{
    e.preventDefault()
   
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      setSuccessMsg('Logged in Successfull. ');
     
      setEmail('');
      setPassword('');    
      setErrorMsg('');
      setTimeout(()=>{
          setSuccessMsg('');
         props.history.push('/');
      },3000)
   }).catch((error)=>{   
    console.log(error.message)
    if(error.message === 'Error (auth/invalid-email)'){
      setErrorMsg('Please fill all required fields')
    }
    if(error.message === 'Error (auth/user-not-found)'){
      setErrorMsg('Email not found')
    }
    if(error.message === 'Error (auth/wrong-password)'){
      setErrorMsg('Wrong password')
    }

   })
  }

      const { t, i18n } = useTranslation();
  



  return (<>
  {/* <InternalHeader/> */}
    <div className='login'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><a href=''> {t("162.label")} </a></div>
            <div className='content '>
                <div className='left'>
                  <div className='imgbg'>
                    <h1>{t("150.label")}</h1>
                    <p>{t("151.label")}</p>
                    <ul>
                      <li>{t("152.label")}</li>
                      <li>{t("153.label")}</li>
                      <li>{t("154.label")}</li>
                    </ul>
                    <Link to="/register"><button className='btn btn-light border-2 button1' >{t("155.label")}</button></Link>
                  </div>
                </div>
                <div className='rightLogin'>
                  <h1>{t("156.label")}</h1>
                  <h2>{t("157.label")}</h2>
                  {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
                <form autoComplete="off" className='form-group' >
                  <input type="text" className='form-control' placeholder='Enter Email' required onChange={(e)=>setEmail(e.target.value)}/>
                  {/* <span>This field is required</span> */}
                  <input type="password" className='form-control' placeholder='Enter Password'  required onChange={(e)=>setPassword(e.target.value)}/>
                  {/* <span>This field is required</span> */}
                  <div className='link'><a href='#'>{t("158.label")}</a></div>
                  <button className='btn btn-primary button2'onSubmit={handleLogin}>{t("159.label")}</button>
                </form>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerLogin'>
              <p>{t("160.label")} <a href=''>{t("161.label")} </a></p>
                
            </footer>
            </>
  )
}
export default  Login;