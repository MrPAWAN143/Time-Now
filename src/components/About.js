import React from 'react'
import '../Shop.css'
import backgroundImage from './assest/images/backgroundimage.webp'
import trust from './assest/icons/shield.png'
import trust1 from './assest//icons/trust.png'
import clock from './assest/icons/fast-time.png'
import house from './assest/icons/house.png'
import people from './assest/icons/management.png'
import card from './assest/icons/loyalty-card.png'
import loaction from './assest/icons/map-pin.svg'
import Footer from './Footer'

import ContactDetails from './ContactDetails'



export default function About() {
  return (
    <>

      <div className='all_text'>
        <div className='Abackgroundimage' style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 500px",
        }}>
          <div className='Aflex'>
            <div className='AaboutME'>
              <span className='Atime_now'>ABOUT TIME NOW</span>
              <span className='whoweare'>WHO WE ARE</span>
              <div className="justBorder mt-5"></div>
            </div>
          </div>

        </div>


        <div className='Adiscripation'>
          <span className='text-white'>
            With more than 50 stores in India and over 50 premium luxury Watch
            brands, Ethos Watches is India’s largest chain of luxury watch boutiques.
            We take pride in helping our customers choose the perfect watch for themselves
            or their loved ones, while protecting them from rampant malpractices in India
            such as smuggled, fake, and refurbished Watches.
          </span>
        </div>


        <div className=''>
          <h3 className='reasons'>6 GREAT REASONS TO BUY A WATCH FROM TIME NOW</h3>
        </div>

        <div className='container mt-5 p-3 d-flex gap-4 justify-content-between flex-wrap'>
          <div className='col-5  d-flex text-white'>
            <div className='AImg m-2 pt-2'>
              <img src={trust} className=' trust' />

            </div>
            <div className='Acontent p-3'>
              <strong className='d-block fs-5 mb-2'>
                Authorised Retailer
              </strong>
              <span className='Adiscription'>
                Ethos is an authorised retailer with over 50 luxury watch brands. Every watch
                that we sell comes with a brand warranty and also gets our Ethos stamp of assurance.
              </span>

            </div>


          </div>



          <div className='col-5   d-flex text-white'>
            <div className='AImg m-2 pt-2'>
              <img src={trust1} className=' trust' />

            </div>
            <div className='Acontent p-3'>
              <strong className='d-block fs-5 mb-2'>
                Trust
              </strong>
              <span className='Adiscription '>
                Employing over 400 people in India, Ethos ethics are an integral part of our DNA.
                You can be rest assured that your horological investment is a genuine piece warranted
                by the respective brand.
              </span>

            </div>


          </div>


          <div className='col-5   d-flex text-white'>
            <div className='AImg m-2 pt-2'>
              <img src={clock} className=' trust' />

            </div>
            <div className='Acontent p-3'>
              <strong className='d-block fs-5 mb-2'>
                Largest Selection
              </strong>
              <span className='Adiscription'>
                With more than 50 stores, over 50 premium luxury Watch brands and over 5000 varied watches at any given time, we have one of the largest selections in every brand.
              </span>

            </div>


          </div>


          <div className='col-5   d-flex text-white'>
            <div className='AImg m-2 pt-2'>
              <img src={house} className=' trust' />

            </div>
            <div className='Acontent p-3'>
              <strong className='d-block fs-5 mb-2'>
                Knowledgeable Staff And Great
              </strong>
              <span className='Adiscription '>
                Well trained staff and great looking boutiques ensure that we make shopping
                for watches an enjoyable and unforgettable experience.
              </span>

            </div>


          </div>


          <div className='col-5   d-flex text-white'>
            <div className='AImg m-2 pt-2'>
              <img src={people} className=' trust' />

            </div>
            <div className='Acontent p-3'>
              <strong className='d-block fs-5 mb-2'>
                Dedicated After-Sales Staff
              </strong>
              <span className='Adiscription'>
                We value your watch as much as you do. A dedicated team and
                state of the art facilities in multiple cities ensure that
                your watch ticks for generations.
              </span>

            </div>


          </div>
          <div className='col-5   d-flex text-white'>
            <div className='AImg m-2 pt-2'>
              <img src={card} className=' trust' />

            </div>
            <div className='Acontent p-3'>
              <strong className='d-block fs-5 mb-2'>
                Loyalty Programme
              </strong>
              <span className='Adiscription'>
                As a part of Ethos’s Club ECHO Loyalty Programme, you not only get
                access to points that you can collect and redeem regularly but also
                get invited to watch collector events, wine tasting sessions, gifts,
                rewards and more!
              </span>

            </div>


          </div>
        </div>





        <div className='Abackgroundimages'>
          <div className='A_Image'>

          </div>

        </div>


        <div className='stores mt-5'>
          <div className='AaboutME'>
            <span className='Atime_now'>WHERE TO FIND US</span>
            <span className='whoweare'>LOCATE AN ETHOS STORE</span>
            <div className="justBorder mt-5"></div>
          </div>



          <div className='Astores d-flex align-items-center justify-content-center container'>
            <div className='Aitem  text-white'>
              <div className='SroresIcon'>
                <img src={house} className='trust d-block m-auto mt-4' />
              </div>
              <strong className='d-block fs-5 mb-2 text-center mt-3'>
                Loyalty Programme
              </strong>
              <span className='Adiscription  d-block ps-5 pe-5 text-center mt-3'>
                As a part of Ethos’s Club ECHO Loyalty Programme, you not only get
                access to points that you can collect and redeem regularly but also
                get invited to watch collector events, wine tasting sessions, gifts,
                rewards and more!
              </span>

            </div>
            <div className='Aitem text-white'>
              <div className='SroresIcon'>
                <img src={loaction} className='trust d-block m-auto mt-4' />
              </div>
              <strong className='d-block fs-5 mb-2 text-center mt-3'>
                Loyalty Programme
              </strong>
              <span className='Adiscription  d-block ps-5 pe-5 text-center mt-3'>
                As a part of Ethos’s Club ECHO Loyalty Programme, you not only get
                access to points that you can collect and redeem regularly but also
                get invited to watch collector events, wine tasting sessions, gifts,
                rewards and more!
              </span>

            </div>

          </div>



        </div>





        <div className='stores mt-5'>
          <div className='AaboutME '>
            <span className='Atime_now'>HOW TO REACH US</span>
            <span className='whoweare'>TALK TO A LUXURY WATCH CONSULTANT</span>
            <div className="justBorder mt-5"></div>
          </div>

          <div className='container Aluxury'>
        <span className='d-block text-white text-center m-auto luxury'>
          The luxury watch helpline is your guide and concierge to luxury timepieces.
          Tell us the occasion and we'll match you a watch for it!
        </span>

      </div>
        
          <ContactDetails/>

       

          {/* <div className='footerItems_1'>
            <img src={storeimage2}className='img-fluid rounded rounded-3' />

            <address className='text-white '>
              717 South ex metro station gate no 2 g block 110023
            </address>
          </div> */}

          <Footer />

        </div>




      </div>
    </>
  )
}
