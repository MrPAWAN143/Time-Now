import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import '../../src/Shop.css'
import bk from './assest/images/background.jpg'
import Fimg_1 from './assest/images/Fwatch.jpg'




export default function Shop() {

  const backgroundImage = {
    backgroundPosition: 'center'
  }
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

      <div className='feature_categories '>

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

            </div>
            <div className='ns-shop-item'>
              <div className='Shop_item_0'>

              </div>
            </div>
            <div className='ns-shop-item'>
              <div className='Shop_item_0'>

              </div>
            </div>
            <div className='ns-shop-item'>
              <div className='Shop_item_0'>

              </div>
            </div>

          </div>
        </div>

      </div>

    </>

  )
}
