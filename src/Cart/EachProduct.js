import React, { useState, useEffect } from "react";
import "./cart.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { db, auth } from "./../Firebase Configration/Firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  collection,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const EachProduct = () => {
  const { t, i18n } = useTranslation();
  const [Orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) setCount(count - 1);
  };
  const getproduct = async () => {
    await getDoc(doc(db, "users", email)).then((res) => {
      console.log(res.data());
      setOrders(res.data().order);
    });
  };
  // const cartDocRef = doc(db,  "users",`${email}`);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
    // getproduct();
    console.log(Orders);
  },[Orders]);
  useEffect(() => {
    console.log(email);
    if (email) {
      getproduct();
    }
  }, [email,Orders]);
  function onRemove(cart) {
    updateDoc(
      doc(db, "users", email),
      {
        order: arrayRemove(cart),
      },
      []
    );
  }
  function onAdd(cart) {
    const exist = Orders.find((x) => x.name === cart.name);
    setOrders(
      Orders.map((x) =>
        x.name === cart.name
          ? { ...exist, Quantity: (exist.Quantity = exist.Quantity + 1) }
          : x
      )
    );

    // console.log(Orders)
    updateDoc(doc(db, "users", `${email}`), { order: Orders }, { merge: true });
  }

  function onMinis(cart) {
    const exist = Orders.find((x) => x.name === cart.name);
    setOrders(
      Orders.map((x) =>
        x.name === cart.name
          ? { ...exist, Quantity: (exist.Quantity = exist.Quantity - 1) }
          : x
      )
    );

    if (exist.Quantity === 0) {
      const x = Orders.indexOf(cart);
      Orders.splice(x, 1);
    }

    // console.log(Orders)
    updateDoc(doc(db, "users", `${email}`), { order: Orders }, { merge: true });
  }

  return (
    <>
      {Orders.map((order, i) => (
        <div className="eachProduct d-flex shadow-lg bg-white col-10 p-3 my-3" key={i}>
          <img src={order.img} width={"20%"}/>
          <div className="d-flex flex-column ">
            <a href="#"></a>
            <div>
              <h6>{order.name}</h6>
              <div className="col-md-6 col-12 justify-content-between align-items-center mt-4 d-flex">
                <span className="Product_Description_txt">{t("j.label")} </span>
                <div>
                  <button className="btn mx-3" onClick={() => onMinis(order)}>
                    <FaMinus />
                  </button>
                  {order.Quantity}
                  <button className="btn mx-3" onClick={() => onAdd(order)}>
                    <GoPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
              <button className="btn AiOutlineHeart ">
                <AiOutlineHeart />
              </button>
              <button className="btn BsTrash" onClick={() => onRemove(order)}>
                <BsTrash />
              </button>
            </div>

            <div className="pb-4">
              <span>
                {order.price}
                <span> EGP</span>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="installment-plans-section">
        <div className="row">
          <div className="col col-lg-8">
            {/* <p>{t("364.label")}{`${parseInt(itemData.cost/6)}`}{t("366.label")} </p> */}
          </div>
          <div className="col col-lg-4">
            <a href="#">{t("365.label")}</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default EachProduct;
