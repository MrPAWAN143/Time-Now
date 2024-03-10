import React from 'react'
import ContactDetails from './ContactDetails'
import '../Shop.css'
import Footer from './Footer'

export default function ContactForm() {
  return (
    <>

      <div className=''>
        <div className='row border pb-5'>

          <div className='col-md-9 m-auto'>
            <p className='fs-3 text-white mt-5 pt-5 text-center'>WHAT CAN WE HELP YOU WITH?</p>
            <div className='container Aluxury'>
              <span className='d-block text-white text-center m-auto luxury'>
                Get in touch with us by filling out the form below. We're also available on our customer care helpline (+91 87250 60021) from Monday to Saturday, between 10:30 am to 6:30 pm, IST. We are happy to hear from you regarding your queries, suggestions, or tips.
              </span>

            </div>
          </div>
          <ContactDetails />
        </div>

        <div className='row p-4 ms-4 mt-4 formrow d-flex align-items-start'>
          <div className='col-md-6 m-auto formx'>
            <form className='ps-2 mb-5 '>
              <div className='col-md-10 mb-4'>
                <h3 className='text-white fs-5 mb-4 fomahead'>CONTACT US</h3>
              </div>
              <div className='col-md-10 mb-4'>
                <label for='name' className='d-block text-white'>How may we address you?</label>
                <input type='text' className='d-block form-control inputform' id='name' placeholder='Name' />
              </div>

              <div className='col-md-10 mb-4'>
                <label for='email' className='d-block text-white'>How can we contact you?</label>
                <input type='email' className='d-block form-control inputform' id='email' placeholder='Email' />
              </div>


              <div className='col-md-10 mb-4'>
                <label for='city' className='d-block text-white'>Which city are you from?</label>
                <input type='text' className='d-block form-control inputform' id='city' placeholder='City' />
              </div>

              <div className='col-md-10 mb-4'>
                <label for='comment' className='d-block text-white'>Which city are you from?</label>
                <textarea id='comment' type='text' className='mt-2 ps-2 pt-1 textarea' cols='54' rows="4" placeholder='Comment'></textarea>
              </div>

              <div className='col-md-10 mb-4'>
                <label for='blank' className='d-block text-white'>Please type the letters below</label>
                <input type='text' className='d-block form-control inputform' id='blank' placeholder='' />
              </div>

              <button className='btn btn-primary   rounded-0 '>Submit</button>
            </form>

          </div>
          <div className='col-md-6 m-auto contactUs '>
            <div>
            <h3 className='text-white fs-5 mb-4 fomahead'>HELPLINES</h3>
            </div>

            <div className='pb-4 ps-2 fomahead'>
            <strong className='fh text-white mt-0 d-block'>Service Helpline</strong>
            <span className='text-white f d-block'>Phone: +91 11 4142 1691 , +91 93190 95793</span>
            <span className='text-white f d-block'>Email: customercare@ethoswatches.com</span>
            </div>

            <div className='pb-4  mt-4 ps-2 fomahead'>
            <strong className='fh text-white mt-0 d-block'>Sales Helpline</strong>
            <span className='text-white f d-block'>Phone: +91 87250 28899 | +91 87250 28882</span>
            <span className='text-white f d-block'>Email: info@ethoswatches.com</span>
            </div>

            <div className='pb-4 mt-4 ps-2 fomahead'>
            <strong className='fh text-white mt-0 d-block'>Corporate Address</strong>
            <span className='text-white f d-block'>Ethos Limited / KDDL Limited / Kamla Centre</span>
            <span className='text-white f d-block'>SCO 88-89, Sector 8-C, Chandigarh, India 160009</span>
            <span className='text-white f d-block'>Phone: +91 172 2548223/4/7</span>
            <span className='text-white f d-block'>Fax: +91 172 2548302</span>
            <span className='text-white f d-block'>Email: info@ethoswatches.com</span>
            </div>

            <div className='pb-4  mt-4 ps-2 fomahead'>
            <strong className='fh text-white mt-0 d-block'>Online Orders And Refunds</strong>
            <span className='text-white f d-block'>Phone: +91 98215 43088, +91 11 4011 5246</span>
            <span className='text-white f d-block'>Email: support@ethoswatches.com</span>
            </div>

            <div className='pb-4  mt-4 ps-2 fomahead'>
            <strong className='fh text-white mt-0 d-block'>Complaints And Grievances</strong>
            <span className='text-white f d-block'>Email: complaints@ethoswatches.com</span>
            <span className='text-white f d-block'>Phone: +91 93119 62444</span>
            <span className='text-white f d-block'>Or</span>
            <span className='text-white f d-block'>Write to us using our Complaints Form</span>

            </div>

          </div>

        </div>

        <Footer/>
      </div>

    </>
  )
}
