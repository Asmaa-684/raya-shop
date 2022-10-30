import React, { Component, useContext, useEffect, useState, useRef } from "react";
import './nav.css'
import TVsList from "../Menu/TVsList";
import MobList from '../Menu/MobList'
import SmallList from "../Menu/SmallList";
import LargeList from "../Menu/LargeList";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { CgCloseR } from "react-icons/cg";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import i18next from "i18next";
import { getallchildcategory, getallmaincategory, getallsubcategory, getCategory, getchildbadge } from "../Shared/Firebase/Products_Functions";
import { useSelector, useDispatch } from 'react-redux';
import productComData from './../store/actions/productComData';
import { search } from './../Shared/Contexts/SearchProvider';
import { useTranslation } from "react-i18next";
import { auth, db } from '../Firebase Configration/Firebase'
import cookies from "js-cookie";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { MdEditCalendar } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";


export default function Navbar() {

  const { t, i18n } = useTranslation();
  const currentLanguageCode = cookies.get("i18next");

  const [orders, setOrders] = useState([])
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setEmail(user.email);
        }
      });
      // getproduct();
    }, [orders]);
    useEffect(() => {
      // console.log(email);
      if (email) {
        getUser();
      }
    }, [email,orders]);
    // }
    // const loggedUser = GetCurrentUser()
    // if(loggedUser){console.log(loggedUser[0])}
  
    const getUser = async () => {
      await getDoc(doc(db, "users", email)).then((res) => {
        // console.log(res.data());
        setUserData(res.data());
        setOrders(res.data().order);
        // console.log(orders.length)
      });
    };
    const updateUserData = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          updateDoc(doc(db, "users", `${user.email}`), {
            Name: FirstName,
          })
            .then(() => {
              setFirstName("");
  
              getUser();
            })
            .catch((error) => {
              // console.log(error.messege);
            });
        } else {
          // console.log("Error updating data");
        }
      });
    };

const changeLanguage = (e) => {

  i18n.changeLanguage(e.target.value);
}
const [show,setshow]= useState()
const [userr, setUserr] = useState({});

const logout = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser==null){
    setshow(false)

    
  }else{
    setshow(true)
    setUserr(currentUser);

  }
});

  const [mainCategory, setMainCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [childCategory, setChildCategory] = useState([])

  const { searchQuery, setSearchQuery } = useContext(search)



  const latestValue = useRef(childCategory);

  const dispatch = useDispatch()

  function getMainCat(element) {
    getallmaincategory(element).then(function (res) {

      setSubCategory(res)

      {
        res.map(ele => {

          getallsubcategory(ele).then(function (res) {

            {
              res.map(ele => {
                const isFound = childCategory.some(element => {
                  if (element.main_category === ele.main_category) {
                    return true;
                  } else {
                    return false;
                  }
                });
                if (!isFound) {
                  setChildCategory(prev => {
                    latestValue.current = [...prev, ele];
                    return [...prev, ele];
                  });
                }
              })
            }
          })
        })
      }
    })


  }




  function main(element) {
    const header = ""
    const headerBadge = []
    let prd = []
    dispatch(productComData({ element, prd, headerBadge, header }))
    getallmaincategory(element).then(res => {

      const headerBadge = res
      const header = element.main_category

      {
        res.map(ele => {
          getallsubcategory(ele).then(res => {

            {
              res.map(ele => {

                getallchildcategory(ele).then(result => {

                  prd = [...result, ...prd]

                  dispatch(productComData({ element, prd, headerBadge, header }))
                  localStorage.setItem("data", JSON.stringify(prd))
                })
              })

            }

          })

        })
      }

    })

  }



  function sub(element) {


    const header = ""
    const headerBadge = []
    let prd = []
    dispatch(productComData({ element, prd, headerBadge, header }))
    getallsubcategory(element).then(res => {

      const header = element.sub_category
      const headerBadge = res
      {
        res.map(ele => {

          getallchildcategory(ele).then(result => {

            prd = [...result, ...prd]

            dispatch(productComData({ element, prd, headerBadge, header }))
            localStorage.setItem("data", JSON.stringify(prd))
          })
        })
      }

    })

  }




  function child(element) {
    const header = ""
    const headerBadge = []
    const prd = []

    getchildbadge(element).then(res => {
      const headerBadge = res

      getallchildcategory(element).then(res => {
        const header = element.child_category
        const prd = res

        dispatch(productComData({ element, prd, headerBadge, header }))
        localStorage.setItem("data", JSON.stringify(prd))

      }
      )
    })
  }


  useEffect(() => {

    getCategory().then(function (res) {
      setMainCategory(res.reverse())
    })


  }, []);



  const [whichComponentToShow, setwhichComponentToShow] = useState('Nav')

  const moveData = (data) => {
    setwhichComponentToShow(`${data}`)
  }

  if (whichComponentToShow === 'Nav') {

    return (
     

        <div className='row'>

          <div className='navbar navbar-expand-lg'>
            <div className='container'>
              <button onClick={() => {
                setwhichComponentToShow('Secnav');

              }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon " onClick={() => {
                  setwhichComponentToShow('Nav');

                }}></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='upperheader HeaderLine mx-3'>
                  <div className='oneLeft pt-2'>
                    <p className='txt'>{t("intro.label")}</p>
                  </div>

                  <div className='oneRight'>
                    <ul className='oneul'>
                      <Link to="/payInstallment"><li className='oneli'><a className='onea mx-5' href='#'> <BsWallet2 size={18} />{t("thankyou.label")}</a></li></Link>
                      <li className='oneli'><a className='onea mx-2' href='#'> <FiPhoneCall size={18} />{t("details.label")}</a></li>
                      <Link to="/storeLocator"><li className='oneli'><a className='onea mx-5' href='#'> <TbBuildingStore size={18} /> {t("Advantages.label")}</a></li></Link>
                      <select
                      onChange={changeLanguage}
                      type="button"
                      className="selector-btn"
                      defaultValue={i18n.language}
                    >
                      <option value="en">English</option>
                      <option value="ar">العربية</option>
                    </select>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='navbar-header '>
            <div className="container">
              <div className="row">
                <div className='col-6 col-xl-2  order-xl-1 order-1 '>
                  <Link to="/"> <img className='Logo' src={require("../assets/Logo.jpg")} />  </Link>
                </div>

                <div className="searchinput col-12   col-xl-6  order-xl-2 order-3">
                  <BiSearchAlt size={30} className="iccon" />

                  <input className='inputs' id="address_form"
                    type="text" aria-describedby="searchHelp" placeholder={t("search.label")}
                    onChange={e => setSearchQuery(e.target.value.toLowerCase())}
                  />
                </div>
                <div className=' col-6 d-flex justify-content-end  col-xl-4  order-xl-3 order-2 mr-5 pr-5 pt-3 '>
                  
                {show===false&&
                <div> 
                  <Link to="/register"><a className='Login me-4' href='#'>{t("login.label")}</a></Link>
                  </div>
                  }
                  {show===true&& 
                  <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      Welcome {userData.Name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/MyAccount"> <BsPersonFill size={25} /><Dropdown.Item href="#/action-1">Account Overview</Dropdown.Item></Link>
        <Link to="/cart"> <FiShoppingBag size={25} /><Dropdown.Item href="#/action-2">My Orders</Dropdown.Item></Link>
        <Link to="/Installments_Component"><MdEditCalendar size={25} /><Dropdown.Item href="#/action-3">My Installments</Dropdown.Item></Link>
        <Link to="/wishlist"> <BsFillHeartFill size={25} /><Dropdown.Item href="#/action-3">My Wishlist</Dropdown.Item></Link>
        <Link to='/home'><Dropdown.Item href="#/action-3" onClick={logout}>Logout</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
  }
                  <Link to="/cart"><a className='sss text-light ms-4 me-3' href='#'> <BsCart2 size={25} />
                  <button className='cart-icon'>{orders.length}</button>
                   </a></Link>
                </div>
              </div>
            </div>
          </div>

          <div className='secnav align-items-center'>
            <div class="navbarr d-flex justify-content-center align-items-center">

              {mainCategory.map(ele => {
                return (
                  <div className="subnav" >
                    {currentLanguageCode === 'ar' ? (<Link to={(ele.main_categoryAR).replace(/\s/g, '')} key={ele.main_id} onClick={() => main(ele)} onMouseOver={() => getMainCat(ele)} ><button class="subnavbtn">{ele.main_categoryAR}</button></Link>
                    ) : (<Link to={(ele.main_category).replace(/\s/g, '')} key={ele.main_id} onClick={() => main(ele)} onMouseOver={() => getMainCat(ele)} ><button class="subnavbtn">{ele.main_category}</button></Link>
                    )}
                    <div className=" subnav-content">
                      <div className='row d-flex  gx-0  '>
                        <div className='row'>
                          <div className='col-8 ps-5 '>
                            {subCategory.map(ele => {
                              return (
                                <>
                                  {currentLanguageCode === 'ar' ? (<a className=" subnava" href="#bring" ><h4 className='maiin ms-4' key={ele.sub_categoryAR} onClick={() => sub(ele)}>{ele.sub_categoryAR}</h4>
                                    <ul className='sub2nav ms-4'>
                                      {childCategory.filter(x => x.sub_categoryAR == ele.sub_categoryAR).map(ele => {
                                        // console.log(childCategory)
                                        return (
                                          <li className='sub2navli' key={ele.child_categoryAR} onClick={() => child(ele)}>{ele.child_categoryAR}</li>
                                        )
                                      })}
                                    </ul>
                                  </a>) : (<a className=" subnava" href="#bring" ><h4 className='maiin ms-4' key={ele.sub_category} onClick={() => sub(ele)}>{ele.sub_category}</h4>
                                    <ul className='sub2nav ms-4'>
                                      {childCategory.filter(x => x.sub_category == ele.sub_category).map(ele => {
                                        // console.log(childCategory)
                                        return (
                                          <li className='sub2navli' key={ele.child_category} onClick={() => child(ele)}>{ele.child_category}</li>
                                        )
                                      })}
                                    </ul>
                                  </a>)}

                                </>
                              )
                            })}
                          </div>
                          <div className='col-4'>
                            <div className='mobtext col-12' style={{ backgroundImage: "url(" + `${ele.main_img}` + ") " }}>
                              <h5 className='deal'>{t("am.label")}</h5>
                              {currentLanguageCode === 'ar' ? (<p className='sale col-8 px-3 d-flex text-wrap'>{ele.main_dealAR}</p>) : (<p className='sale col-8 px-3 d-flex text-wrap'>{ele.main_deal}</p>)}
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-md-6'>
                              <img src={require("../assets/oppo.webp")} />
                              <img src={require("../assets/apple.webp")} />
                              <img src={require("../assets/5.webp")} />
                              <img src={require("../assets/sam.webp")} />
                            </div>
                          </div>
                          <div>
                            <a className='text-primary-500 font-bold flex items-center mt-2 nuxt-link-exact-active nuxt-link-active text-decoration-none'>
                              <span className='w-12 h-12 rounded-xl mr-5 bg-primary-500 p-4 icon sprite-icons'><BsFillArrowRightSquareFill color='blue' size={50} /></span>
                              <span className='foottxt'> Shop All Mobiles & Tablets</span>
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                    </div>
                    )
              })}




                  
          </div>
          </div>
        </div>


        );
  }
  else if (whichComponentToShow === 'Secnav') {
    return (

        <div>

          <div className='row'>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">


                <div className='container-fluid flex items-center'>
                  <div className='sidemenu'>
                    <nav className='bg-primary-300 w-full h-full overflow-y-auto relative z-40'>
                      <div className='maincol text-center text-tertiary-600  bg-primary-700 py-5 font-light'>

                        <p className='collapstext '>{t("intro.label")}</p>
                      </div>
                      <div className='row'>

                        <div className='butn  col-3 ' onClick={() => {
                          setwhichComponentToShow('Nav');

                        }}>
                          <div >
                            < CgCloseR size={30} />
                          </div>
                        </div>
                        <div className='col-5'>
                          <img className='piclogo' src={require("../assets/seclogo.png")} />
                        </div>  </div> </nav>
                  </div>
                  <div className='text-center'>
                    <p className='TXTLOG'>{t("login.label")}</p></div>

                  <hr />

                </div>
              </div>
            </nav>
          </div>

          <div className='items'>
            <ul className='mt-8 space-y-10 px-6'>

              <li className='itemsli'> <div >
                <img className='ofer' src={require("../assets/offer.webp")} />
                <a className='itemsa px-2 text-danger' href="#home">{t("382.label")}</a></div>
              </li>
              <br />
              <div>
                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/mobiles-_-tablets.png")} />

                      <a className='itemsa' onClick={() => {
                        setwhichComponentToShow('MobList');
                      }}>
                        {t("383.label")}
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <div>
                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/tv_home_theater_2x.png")} />

                      <a className='itemsa' onClick={() => {
                        setwhichComponentToShow('TVsList');
                      }}>
                        {t("385.label")}
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <div>
                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/large_appliances_2x.png")} />

                      <a className='itemsa' onClick={() => {
                        setwhichComponentToShow('LargeList');
                      }}>
                        {t("387.label")}
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <div>

                <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>

                      <img className='mobcollpse' src={require("../assets/small_appliances_2x.png")} />

                      <a className='itemsa' onClick={() => {
                        setwhichComponentToShow('SmallList');
                      }}>
                        {t("388.label")}
                      </a>
                    </div>
                    <div>
                      <span><MdKeyboardArrowRight size={50} /></span>
                    </div>
                  </div>
                </li>
              </div>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/kitchen_appliances_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">{t("389.label")}</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />

              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/electronics_2x_2.png")} />
                    <a className='itemsa px-2 text-body' href="#company">{t("390.label")}</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>

                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/computers_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">{t("391.label")}</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/health_and_wellness_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">{t("501.label")}</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div>
                </div>
              </li>
              <br />
              <li className='itemsli flex justify-between items-center font-bold text-primary-700 font-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <img className='mobcollpse' src={require("../assets/vehicles_2x.png")} />
                    <a className='itemsa px-2 text-body' href="#company">{t("sw.label")}</a>
                  </div>
                  <div>
                    <span className='fs-1 w-100'><MdKeyboardArrowRight size={50} /></span>
                  </div></div>
              </li>
              <br />
            </ul>
          </div>
          <div className='minifooter'>
            <ul>
              <li className='minili'><a className='minia' href='#'> <BsWallet2 size={18} /> {t("thankyou.label")}</a></li><br />
              <li className='minili'><a className='minia' href='#'> <FiPhoneCall size={18} />{t("details.label")}</a></li><br />
              <li className='minili'><a className='minia' href='#'> <TbBuildingStore size={18} />{t("Advantages.label")}</a></li><br />
              <li className='minili'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <a className='minia' href='#'><TbWorld size={18} />{t("eee.label")}
                    </a>
                  </div> <div>
                    <span className='px-5'>{t("eewe.label")}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        );
  }
        else if (whichComponentToShow === 'MobList') {
    return (
        <div>
          <MobList moveData={moveData} />
        </div>
        );
  }

        else if (whichComponentToShow === 'TVsList') {
    return (
        <div>
          <TVsList moveData={moveData} />

        </div>
        );
  }

        else if (whichComponentToShow === 'SmallList') {
    return (
        <div>
          <SmallList moveData={moveData} />
        </div>
        );
  }
        else if (whichComponentToShow === 'LargeList') {
    return (
        <div>
          <LargeList moveData={moveData} />
        </div>
        );
  }
        return null;


}


