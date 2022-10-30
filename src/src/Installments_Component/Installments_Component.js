import React from 'react'
import PayInstallment from '../PayInstallment/PayInstallment';
import Side_Account from '../Side_Account/Side_Account'


export default function Installments_Component() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='col-md-2'>
            <Side_Account />
        </div>
        <div className="col-md-8">
          <PayInstallment/>        
        </div>
      </div>
    </div>
    </>
  )
}