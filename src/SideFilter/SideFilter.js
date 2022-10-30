import React from 'react'
import { GrFormAdd } from "react-icons/gr";

import { useTranslation } from "react-i18next";


const SideFilter= () => {

    const { t, i18n } = useTranslation();








  return (
    <>
      <div className=' d-flex  flex-column pt-4'>
       
        <h2>{t("177.label")}</h2>
        <p>
          <a className="box" data-bs-toggle="collapse" href="#a" role="button" aria-expanded="false" aria-controls="collapseExample">
            
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("178.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
             
          </a>

        </p>
        <div className="collapse" id="a">
          <input type='range' min={0} max={400000} />
          < div className='w-75 d-flex justify-content-between'>
            <span>0</span>
            <span>400000</span>
          </div>


        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#b" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("179.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="b">
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("206.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("207.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("208.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("209.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("210.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#c" role="button" aria-expanded="false" aria-controls="collapseExample">

            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("180.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="c">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("211.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("212.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("213.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("214.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("215.label")}<br />
        </div>
        <hr />

        <p>
          <a className="box" data-bs-toggle="collapse" href="#d" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("181.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="d">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("216.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("217.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("218.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("219.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("220.label")}<br />

            <a href='#'>{t("222.label")}</a>
          </form>
        </div>

        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#e" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("182.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="e">


          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("223.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("224.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("225.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("226.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("227.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("228.label")}<br />
            <a href='#'>{t("229.label")}</a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#f" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("183.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="f">


          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("230.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("231.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("232.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("233.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("234.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("235.label")}<br />
            <a href='#'>{t("236.label")}</a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#g" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("184.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="g">


          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("237.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("238.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("239.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("240.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("241.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("242.label")}<br />
            <a href='#'>{t("243.label")} </a>
          </form>
        </div>
        <hr />

        <p>
          <a className="box" data-bs-toggle="collapse" href="#h" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("185.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="h">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("244.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("245.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#j" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("186.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="j">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("246.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("247.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#k" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("187.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="k">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("248.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("250.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value='x' />{t("251.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#j" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("189.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="j">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("259.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("260.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("261.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("262.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("263.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("264.label")}<br />
            <a href='#'>{t("265.label")}</a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#l" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("190.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="l">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("266.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("267.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#m" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("191.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="m">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("268.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("269.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#n" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("192.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="n">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("270.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("271.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("272.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="j" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("193.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="j">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("273.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("274.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#k" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("194.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="k">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("275.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("276.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("277.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("278.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("279.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#3" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("197.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="3">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("280.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("281.label")}r<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("282.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("283.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#l" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("199.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="l">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("284.label")}<br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#m" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("200.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="m">

          < input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("285.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("286.label")}<br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("287.label")}<br />

        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#n" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("201.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="n">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> 0 <br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1 <br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#o" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("202.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="o">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("288.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> {t("289.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("290.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("291.label")} <br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("292.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> {t("293.label")}<br />


            <a href='#'>{t("294.label")} </a>
          </form>
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="p" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("203.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="p">
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> {t("295.label")} <br />
        </div>

        <div className="collapse" id="q">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Water filter <br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> Cartridge <br />
        </div>
        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#r" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("205.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="r">

          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> 0 <br />
          <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />1 <br />
        </div>

        <hr />
        <p>
          <a className="box" data-bs-toggle="collapse" href="#dk" role="button" aria-expanded="false" aria-controls="collapseExample">
            <div className='d-flex justify-content-between align-items-center'>
              <span>{t("296.label")}</span>
            <span className='fs-1'><GrFormAdd /></span>
            </div>
          </a>

        </p>
        <div className="collapse" id="dk">
          <p className='search-text'></p>
          <form className='search'>
            <div>
              <input type='text' placeholder='Search' />
            </div>
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("297.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> {t("298.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("299.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("300.label")} <br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" />{t("301.label")}<br />
            <input class="form-check-input" type="checkbox" id="x" name="x" value="x" /> {t("302.label")}<br />


            <a href='#'>{t("303.label")} </a>
          </form>
        </div>
      </div>
    </>
  )
}
export default  SideFilter;