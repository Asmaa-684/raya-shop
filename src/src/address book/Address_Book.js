import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEditCalendar } from "react-icons/md";
import {
  BsFillHeartFill,
  BsDoorClosed,
  BsBuilding,
  BsSignpostFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { GiDirectionSign, GiStairs } from "react-icons/gi";
import './Address_Book.css'
import { useTranslation } from "react-i18next";

const Address_Book= () => {

    const { t, i18n } = useTranslation();

  return (
    <>
      <IoIosArrowBack size={20} />
      <a href="#" className=" address_a">
      {t("352.label")}
      </a>

      <p className="account_h1 p-2 d-block">{t("344.label")}</p>

      <p className="address_p ">{t("345.label")}</p>

      <form className="mt-5">
        <div class="input-group-lg">
         
          <FaUser size={20} className="icon" />
          <input
            id="address_form"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder={t("353.label")}
            required
          />
           <label className="account_label">
            <span className="span">{t("353.label")}</span>
            <span className="span">*</span>
          </label>
        </div>

        <div class="input-group-lg">
          <BsTelephoneFill size={20} className="icon" />
          <input
            id="address_form"
            type="password"
            class="form-control "
            placeholder={t("354.label")}
            required
          />
          <label className="account_label">
            <span className="span">{t("354.label")}</span>
            <span className="span">*</span>
          </label>
        </div>
        <div class="row">
          <div class="col input-group-lg">
            <ImEarth size={20} className="icon" />
            <input
              id="address_form"
              type="Number"
              class="form-control"
              placeholder={t("346.label")}
              aria-label="First name"
              required
            />
            <label className="account_label">
              <span className="span">{t("355.label")}</span>
              <span className="span">*</span>
            </label>
          </div>
          <div class="col input-group-lg">
            <GoLocation size={20} className="icon" />

            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder={t("347.label")}
              aria-label="Last name"
              required
            />
            <label className="account_label">
              <span className="span">{t("356.label")}</span>
              <span className="span">*</span>
            </label>
          </div>
        </div>
        <div class="input-group-lg">
          <GiDirectionSign size={20} className="icon" />
          <input
            id="address_form"
            type="password"
            class="form-control"
            placeholder={t("348.label")}
            required
          />
          <label className="account_label">
            <span className="span">{t("348.label")}</span>
            <span className="span">*</span>
          </label>
        </div>
        <div class="row">
          <div class="col input-group-lg">
            <BsBuilding size={20} className="icon" />
            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder={t("358.label")}
              aria-label="First name"
              required
            />
            <label className="account_label">
              <span className="span">{t("357.label")}</span>
              <span className="span">*</span>
            </label>
          </div>
          <div class="col input-group-lg">
            <GiStairs size={20} className="icon" />
            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder={t("359.label")}
              aria-label="Last name"
              required
            />
            <label className="account_label">
              <span className="span">{t("361.label")}</span>
            </label>
          </div>
          <div class="col input-group-lg">
            <BsDoorClosed size={20} className="icon" />
            <input
              id="address_form"
              type="text"
              class="form-control"
              placeholder={t("359.label")}
              aria-label="Last name"
              required
            />
            <label className="account_label">
              <span className="span">{t("362.label")}</span>
            </label>
          </div>
        </div>
        <div class="input-group-lg">
          <BsSignpostFill size={20} className="icon" />
          <input
            id="address_form"
            type="password"
            class="form-control"
            placeholder={t("360.label")}
            required
          />
          <label className="account_label">
            <span className="span">{t("363.label")}</span>
            <span className="span">*</span>
          </label>
        </div>
        <div class="mb-3 mt-5 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
          {t("349.label")}
          </label>
        </div>
        <div className="items-center col-md d-flex mt-15">
          <a href="#" class=" address_button">
          {t("350.label")}
          </a>
          <a href="#" className="address_buttonn">
          {t("351.label")}
          </a>
        </div>
      </form>
    </>
  );
}
export default  Address_Book;