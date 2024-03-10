import React from 'react'
import '../Shop.css';
import CartFooter from './CartFooter';
import onlineorder from './assest/icons/online-order.svg'
import watchservice from './assest/icons/watch-service.svg'
import accoutbulding from './assest/icons/account-billing.svg'
import helpline from './assest/icons/helpline.svg'
import generalQuestion from './assest/icons/generalQuestion.svg'
import contactUs from './assest/icons/contactUs.svg'

import { Link } from 'react-router-dom';


export default function Help() {
  return (
    <>
  
      <div className='containeraa '>
        <div className='helpseach pt-5 pb-5'>
          <p className='fs-2 text-white text-center'>How can we help?</p>


          <div className='row'>
            <div class="mb-3 m-auto mt-3 col-5">

              <input type="text" className="form-control askquestion" placeholder="Type your question here..." />
            </div>
          </div>
          <p className='fs-3 text-white text-center mt-3'>...Or browse by topic</p>


         <div className='row gap-5 mt-5 pb-5'>
          <div className='requarment d-flex gap-5'>
            <div className='help_item card'>
              <Link to={'contactform'} className='ns_card d-flex flex-column  nav-link '>
              <img src={onlineorder} alt='Online Order mb-2' className='img-fluid'/>
              <p className='text-dark cardHead mt-1 mb-0'> Online Order</p>
              <p className='text-dark py-0 px-5 mt-0 mb-0 text-center cardparagraph'> If you have any queries regarding an order you placed online, click here</p>
              </Link>
            </div>
            <div className='help_item card'>
            <Link to={'contactform'} className='ns_card d-flex flex-column  nav-link'>
              <img src={accoutbulding} alt='Online Order mb-2' className=''/>
              <p className='text-dark cardHead mt-1 mb-0'> Account And Billing</p>
              <p className='text-dark py-0 px-5 mt-0 mb-0 text-center cardparagraph'> To manage your account, find offers and promotions, or to find your invoice, click here</p>
              </Link>
            </div>
            <div className='help_item card'>
            <Link to={'contactform'} className='ns_card d-flex flex-column  nav-link'>
              <img src={watchservice} alt='Online Order mb-2' className=''/>
              <p className='text-dark cardHead mt-1 mb-0'>Watch Service</p>
              <p className='text-dark py-0 px-5 mt-0 mb-0 text-center cardparagraph'>Do you need to get your watch serviced? Click here if you have any questions</p>
              </Link>
            </div>
          </div>
          <div className='requarment d-flex gap-5'>
            <div className='help_item card'>
            <Link to={'contactform'} className='ns_card d-flex flex-column  nav-link'>
              <img src={helpline} alt='Online Order mb-2' className=''/>
              <p className='text-dark cardHead mt-1 mb-0'>Helplines</p>
              <p className='text-dark py-0 px-5 mt-0 mb-0 text-center cardparagraph'>Do you have any specific concerns? Click here for our various helplines</p>
              </Link>
            </div>
            <div className='help_item card'>
            <Link to={'contactform'} className='ns_card d-flex flex-column  nav-link'>
              <img src={generalQuestion} alt='Online Order mb-2' className=''/>
              <p className='text-dark cardHead mt-1 mb-0'>General Questions</p>
              <p className='text-dark py-0 px-5 mt-0 mb-0 text-center cardparagraph'>Do you have any query? Let us help you with it</p>
              </Link>
            </div>
            <div className='help_item card'>
            <Link to={'contactform'} className='ns_card d-flex flex-column  nav-link'>
              <img src={contactUs} alt='Online Order mb-2' className=''/>
              <p className='text-dark cardHead mt-1 mb-0'>Contact Us</p>
              <p className='text-dark py-0 px-5 mt-0 mb-0 text-center cardparagraph'>Get in touch with us. We’ll be happy to hear from you</p>
              </Link>
            </div>
          </div>
         </div>
        </div>


    <div className='pt-3'>
    <CartFooter/>
    </div>

      </div>
    </>
  )
}
