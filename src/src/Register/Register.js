import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import InternalHeader from '../InternalHeader/InternalHeader'
import './Register.css'
import { useHistory } from 'react-router-dom'
import {auth,db} from '../Firebase Configration/Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {collection,addDoc} from "firebase/firestore"
import { useTranslation } from "react-i18next";

const Register= (props) => {
  const history = useHistory();

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [phone, setPhone] = useState('') 
  const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg]=useState('');
  const [wishList,setWishlist] = useState([])
  const [order,setOrder] = useState([])
  const [address,setAddress] = useState([])

  const handleSignup=(e)=>{
    e.preventDefault();
    console.log(name, email, password,phone);
    createUserWithEmailAndPassword(auth,email,password).then((credentials)=>{
        console.log(credentials);
        const user = credentials.user;
        console.log(user);
      addDoc(collection(db,'users'),{
            uid:user.uid,
            Name: name,
            Email: email,
            Password: password,
            Phone:phone,
            WishList:wishList,
            Order:order,
            Address:address

        }).then(()=>{
            setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            setAddress([]);
            setOrder([]);
            setWishlist([]);
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
               props.history.push('/login');
            },3000)
        }).catch(error=>setErrorMsg(error.message));
    }).catch((error)=>{
        setErrorMsg(error.message)
    })
}


    const { t, i18n } = useTranslation();

  return (
    <>
    {/* <InternalHeader/> */}
    {/* <InternalHeader/> */}
     <div className='register'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><Link to='/login'> {t("174.label")}</Link></div>
            <div className='content '>
             
                <div className='rightRigister'>
                  <h1>{t("163.label")} </h1>
                  <h2>{t("164.label")}</h2>
                  <form autoComplete="off" onSubmit={handleSignup}>
                    <input type="text" className='form-control' required placeholder={t("168.label")}
                     onChange={(e)=>setName(e.target.value)} />
                    
                    <input type="text" required className='form-control' placeholder={t("169.label")}
                   onChange={(e)=>setEmail(e.target.value)}/>
                    
                    <input type="number" required className='form-control' placeholder={t("170.label")}
                    onChange={(e)=>setPhone(e.target.value)}/>
                  
                    <input type="password" required className='form-control' placeholder={t("171.label")}
                    onChange={(e)=>setPassword(e.target.value)}/>
                  
                    
                    <button className='btn button2Register'>{t("163.label")}</button>
                  </form>
                </div>
                <div className='left'>
                  <div className='imgbg d-flex'>
                    <h1>{t("165.label")}</h1>
                    <p>{t("166.label")}</p>
                    <Link to="/login"><button  className='btn btn-light border-2 button1'>{t("167.label")}</button></Link>
                  </div>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerRegister'>
              <p>{t("172.label")}<a href=''>{t("173.label")}</a></p>
                
            </footer>
            </>
  )
}
export default Register;