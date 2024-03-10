import React from 'react'
import house from './assest/icons/house.png'
import call from './assest/icons/phone-call.svg'
import live from './assest/icons/message-square.svg'

export default function ContactDetails() {
  return (
    <>

     



      <div className='Astores d-flex align-items-center justify-content-center container'>
        <div className='Aitem  contactEmail text-white'>
          <div className='SroresIcon'>
            <img src={house} className='trust d-block m-auto mt-4' />
          </div>
          <strong className='d-block fs-6 mb-2 text-center mt-3'>
            EMAIL US
          </strong>
          <span className='Adiscription  d-block ps-5 pe-5 text-center mt-3'>
            info@thepathway.co.in
          </span>

        </div>
        <div className='Aitem contactEmail text-white'>
          <div className='SroresIcon'>
            <img src={call} className='trust d-block m-auto mt-4' />
          </div>
          <strong className='d-block fs-6 mb-2 text-center mt-3'>
            CALL US
          </strong>
          <span className='Adiscription  d-block ps-5 pe-5 text-center mt-3'>
            <spam>+91 7070482610</spam>
            <br />
            <spam>+91 8076073194</spam>
          </span>

        </div>


        <div className='Aitem  contactEmail text-white'>
          <div className='SroresIcon'>
            <img src={live} className='trust d-block m-auto mt-4' />
          </div>
          <strong className='d-block fs-6 mb-2 text-center mt-3'>
            LIVE CHAT
          </strong>
          <span className='Adiscription  d-block ps-5 pe-5 text-center mt-3'>
            <spam>Monday-Friday, 10:00 am - 2:00 am</spam>
            <br />
            <spam>Saturday-Sunday, 10:00 am - 7:00 pm</spam>
          </span>

        </div>

      </div>

    </>
  )
}
