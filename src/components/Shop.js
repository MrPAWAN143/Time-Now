import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import '../../src/Shop.css'
import bk from './assest/images/background.jpg'
import Fimg_1 from './assest/images/Fwatch.jpg'
import star from './assest/icons/star.svg'
import Fimg_2 from './assest/images/Fwatch2.jpg'
import Fimg_3 from './assest/images/Fwatch3.jpg'
import Fimg_4 from './assest/images/Fwatch4.jpg'
import Fimg_5 from './assest/images/Fwatch5.jpg'
import Fimg_6 from './assest/images/Fwatch6.jpg'

import feature_1 from './assest/images/feature_1.webp'
import feature_2 from './assest/images/feature_2.webp'
import feature_3 from './assest/images/feature_3.jpeg'
import feature_4 from './assest/images/feature_4.webp'
import feature_5 from './assest/images/feature_5.webp'
import feature_6 from './assest/images/feature_6.webp'
import locationimg from './assest/images/storeImage.webp'

import { useState } from 'react'

import Footer from './Footer'





export default function Shop() {

  const backgroundImage = {
    backgroundPosition: 'center'
  }

  const [product , setproduct] = useState([
    {
    id:1,
    ProductName:"Bovet",
    Price:"Rs 49999",
    discripation:`Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to
     manufacture watches for the Chinese market. Pascal Raffy`,
    Images:{
      image_1:feature_1,
      image_2:{Fimg_2},
      image_3:{Fimg_3},
      image_4:{Fimg_4}
    },
    
    
  },
    {
    id:2,
    ProductName:"Breitling",
    Price:"Rs 59999",
    discripation:`Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to
     manufacture watches for the Chinese market. Pascal Raffy`,
    Images:{
      image_1:feature_2,
      image_2:{Fimg_2},
      image_3:{Fimg_3},
      image_4:{Fimg_4}
    },
    
    
  },
  {
    id:3,
    ProductName:"Bulgari",
    Price:"Rs 59999",
    discripation:`Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to manufacture
     watches for the Chinese market. Pascal Raffy`,
    Images:{
      image_1:feature_3,
      image_2:{Fimg_2},
      image_3:{Fimg_3},
      image_4:{Fimg_4}
    },
    
    
  },
  {
    id:4,
    ProductName:"Favre Leuba",
    Price:"Rs 79999",
    discripation:`Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to
     manufacture watches for the Chinese market. Pascal Raffy`,
    Images:{
      image_1:feature_4,
      image_2:{Fimg_2},
      image_3:{Fimg_3},
      image_4:{Fimg_4}
    },
    
    
  },
  {
    id:5,
    ProductName:"Grand Seiko",
    Price:"Rs 99999",
    discripation:`Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to 
    manufacture watches for the Chinese market. Pascal Raffy`,
    Images:{
      image_1:feature_5,
      image_2:{Fimg_2},
      image_3:{Fimg_3},
      image_4:{Fimg_4}
    },
    
    
  },
  
  {
    id:6,
    ProductName:"Hublot",
    Price:"Rs 109999",
    discripation:`Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to 
    manufacture watches for the Chinese market. Pascal Raffy`,
    Images:{
      image_1:feature_6,
      image_2:{Fimg_2},
      image_3:{Fimg_3},
      image_4:{Fimg_4}
    },
    
    
  },
  
 
])
  return (

    <>
      <div className='container-xl-fluit pt-3 pb-3 shop'>
        <div className='backgroundImage position-relative' style={{ backgroundImage: `url(${bk})` }}>

          <div className='overlay'>

            <div className='hero-content'>
              <h3 className='display-5 text-white text-center headline'>
                <span >
                  Tagline Describing Your  Shop Name
                </span>

              </h3>
              <div className='subscribe text-white shopEmail'>

                <div className='ns_subscribe'>
                  <input type='email' className='email_id' placeholder='Email Address' />
                  <button className='text-white subscribe_btn'>Subscribe</button>

                </div>
              </div>

            </div>

          </div>



        </div>

      </div>

      <div className='feature_categories container-fluid'>

        <div className='itemsShop'>



          
          <h3 className='display-5 text-white text-center w-100'>
            Feature Categories
          </h3>
          <span className='d-block text-center text-white w-50 m-auto'>
            In publishing and graphic design,
            In publishing and graphic design,
            In publishing and graphic design,
            In publishing and graphic design,
            In publishing and graphic design,
          </span>

          <div className='ShopItem'>
            <div className='ns-shop-item'>
              <div className='Shop_item_0'>

              </div>

              <span className='productName fs-5 text-white d-block mt-2 w-100 text-center'>
                CATEGORY
              </span>

            </div>
            <div className='ns-shop-item'>
              <div className='Shop_item_0'>

              </div>
              <span className='productName fs-5 text-white d-block mt-2 w-100 text-center'>
                CATEGORY
              </span>
            </div>
            <div className='ns-shop-item'>
              <div className='Shop_item_0'>

              </div>
              <span className='productName fs-5 text-white d-block mt-2 w-100 text-center'>
                CATEGORY
              </span>
            </div>
            <div className='ns-shop-item'>
              <Link to={'about'}>
                <div className='Shop_item_0 position-relative'>
                  <div className='overlay'>
                    <span className='productName fs-5 text-white d-block mt-2 w-100 text-center zn-4 lh'>
                      Shop Now
                    </span>
                  </div>

                </div>
              </Link>

            </div>

          </div>
        </div>

      </div >



      <div className='withNewsletter'>


        <div className=' border_right'>
          <img src={Fimg_1} className='w-100 h-100' />

        </div>



        <div className='border_right'>
          <div className='w-100 border-0 m-0 p-0 ms-5'>
            <div className='w-100 mt-5'>
              <h3 className='newsletter_heading fs-1 text-white pt-4'>
                Newsletter
              </h3>
              <div className='mt-0 d-flex mt-3 w-75'>
                <input type='email' className='email_id' placeholder='Email Address' />
                <button className='text-white subscribe_btn'>Subscribe</button>

              </div>

            </div>

          </div>

        </div>
        <div className='border_right p-5'>
          <div className=''>
            <h3 className='newsletter_heading fs-1 text-white'>
              Header
              Regarding
              Your product

            </h3>
            <span className='discripation text-white fs-7 d-block mt-4 lh-4'>
              In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document
              or a typeface without relying on meaningful

            </span>

            <button className='browser'>
              Browse All
            </button>

          </div>




        </div>
        <div className='border_right p-3'>

          <div className='d-flex align-items-center flex-wrap w-100 shop_parents justify-content-between'>

            {(product != null) ?product.map((item) => <Link className=' shopItem nav-link'>
              <div className='border_right imageItem'>
                <img src={item.Images.image_1} className='w-100 h-100 object-fit-cover' />

              </div>
              <div className='border_right ProductNameItem p-3'>

                <div className='text-start ps-2 shopPro'>
                  <span className='fs-5 text-white d-block'>
                    {item.ProductName}
                  </span>
                  <span className='text-white mt-2'>
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                  </span>
                  <span className='fs-6 text-warning d-block mt-1'>
                    {item.Price}
                  </span>

                </div>

              </div>
            </Link>) : <h3 className='fs3'>Loading</h3>}



           

          </div>

        </div>

      </div>


      <div className='newsletter headfooter text-center border_right'>
        <div className='Ncontent footer m-auto'>

          <div className='footerItems_1'>
            <img src={locationimg} className='rounded rounded-3' />
            <address className='text-white '>
              717 South ex metro station gate no 2 g block 110023
            </address>
          </div>

         <Footer/>

        </div>
      </div>

    </>

  )
}
