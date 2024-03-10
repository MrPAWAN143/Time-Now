import React, { useState } from 'react'
import '../App.css';
import '../Shop.css';

import bk from './assest/images/background.jpg'
import video from './../default.mp4'
import rightarrow from './assest/icons/chevron-right.svg'
import leftarrow from './assest/icons/chevron-left.svg'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import star from './assest/icons/star.svg'
import Fimg_1 from './assest/images/Fwatch.jpg'
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

import Img from './assest/images/imageZ.jpg'
import img1 from './assest/images/imageZ1.jpg'
import img2 from './assest/images/imageZ2.jpg'
import img3 from './assest/images/imageZ3.jpg'
import img4 from './assest/images/imageZ4.jpg'




export default function Home() {


  const [feature_product, setfeature_product] = useState([
    {
      id: 1,
      ProductName: "Bovet",
      Price: "Rs 49999",
      discripation: `Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to
       manufacture watches for the Chinese market. Pascal Raffy`,
      Images: {
        image_1: feature_1,
        image_2: { Fimg_2 },
        image_3: { Fimg_3 },
        image_4: { Fimg_4 }
      },


    },
    {
      id: 2,
      ProductName: "Breitling",
      Price: "Rs 59999",
      discripation: `Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to
       manufacture watches for the Chinese market. Pascal Raffy`,
      Images: {
        image_1: feature_2,
        image_2: { Fimg_2 },
        image_3: { Fimg_3 },
        image_4: { Fimg_4 }
      },


    },
    {
      id: 3,
      ProductName: "Bulgari",
      Price: "Rs 59999",
      discripation: `Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to manufacture
       watches for the Chinese market. Pascal Raffy`,
      Images: {
        image_1: feature_3,
        image_2: { Fimg_2 },
        image_3: { Fimg_3 },
        image_4: { Fimg_4 }
      },


    },
    {
      id: 4,
      ProductName: "Favre Leuba",
      Price: "Rs 79999",
      discripation: `Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to
       manufacture watches for the Chinese market. Pascal Raffy`,
      Images: {
        image_1: feature_4,
        image_2: { Fimg_2 },
        image_3: { Fimg_3 },
        image_4: { Fimg_4 }
      },


    },
    {
      id: 5,
      ProductName: "Grand Seiko",
      Price: "Rs 99999",
      discripation: `Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to 
      manufacture watches for the Chinese market. Pascal Raffy`,
      Images: {
        image_1: feature_5,
        image_2: { Fimg_2 },
        image_3: { Fimg_3 },
        image_4: { Fimg_4 }
      },


    },

    {
      id: 6,
      ProductName: "Hublot",
      Price: "Rs 109999",
      discripation: `Watchmaker Edouard Bovet’s Bovet was founded in London in 1822 to 
      manufacture watches for the Chinese market. Pascal Raffy`,
      Images: {
        image_1: feature_6,
        image_2: { Fimg_2 },
        image_3: { Fimg_3 },
        image_4: { Fimg_4 }
      },


    },


  ])


  // console.log(feature_product)
  const [feature, setfeature] = useState(feature_product)
  // console.log(feature)




  return (
    <>

      <div className='container-xl-fluit pt-3 pb-3'>

        <div className=' home'>
          {/* <video autoPlay muted loop id='myvideo' >
            <source src={video} type='video/mp4' />
          </video> */}

          <div className='backgroundImage position-relative' style={{ backgroundImage: `url(${bk})` }}>
            <video className='my-video' muted={true} autoPlay={true} loop={true}>
              <source src={video}></source>
            </video>
            <div className='overlay'>
              <div className='hero-content'>
                <h3 className='display-5 text-center headline'>
                  <span >
                    Product
                  </span>
                </h3>





                <div className='items'>
                  <div className='slider'>
                    <div className='item'>
                      <div className='ns-item '>
                        <img src={Fimg_1} className='Fimg_1' />

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>
                        <img src={Fimg_2} className='Fimg_1' />

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>
                        <img src={Fimg_3} className='Fimg_1' />

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>
                        <img src={Fimg_4} className='Fimg_1' />

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>
                        <img src={Fimg_5} className='Fimg_1' />

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>
                        <img src={Fimg_6} className='Fimg_1' />

                      </div>
                    </div>
                  </div>


                </div>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-primary homeShop d-block m-auto rounded-0">Shop Now</button>
                </div>
              </div>

            </div>

          </div>




        </div>


        <div className='conteniar-1 mb-0 pb-0'>
          <div className='secondDiv d-flex justify-content-center align-items-center position-relative'>
            <div>
              <h3 className='featureProductHeading display-5 text-center'>
                Feature Product
              </h3>

              <div className='Featur_slider'>
                <div className='Feature_items'>
                  {(feature_product != null) ? feature_product.map((item) => <div className='Feature_item'>
                    <div className='ns_Feature_item'>
                      <img src={item.Images.image_1} className='featureWatch' />
                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-4 headline'>
                        {item.ProductName}
                      </span>
                      <br />
                      <span className='productName fs-7 headline'>
                        {item.discripation}
                      </span>
                      <br />

                      <em className='productName productNamexx fs-7 text-warning'>
                        {item.Price}
                      </em>
                    </div>

                  </div>) : <h2>Data is loading</h2>}
                </div>

                <button className='rightarrow'>
                  <img src={rightarrow} />
                </button>
                <button className='leftarrow'>
                  <img src={leftarrow} />
                </button>

              </div>

            </div>

          </div>


        </div>



        <div className='newsletter text-center mt-0'>
          <div className='Ncontent aboout m-auto'>
            <h3 className='newsletter_heading fs-1 aboutHeading headline'>
              About Your Shop
            </h3>
            <span className='discripation headline fs-7'>
              In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document
              or a typeface without relying on meaningful

            </span>

          </div>


        </div>





        <div className='Tproduct'>
          <div className='ns_Tproduct'>
            <div className='itemsz'>

              <div className='ns_item scale'>
                <img src={Img} className='w-100 h-100 object-fit-cover' />

              </div>
              <div className='disss'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='productNamex  productnameF headline ps-3'>
                    MERCIER
                  </span>
                  <span className='headline'>
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                  </span>
                </div>
                <em className='productNamex productNamexx headline'>
                  &#8377; 55999.00
                </em>


              </div>

            </div>

            <div className='itemsz'>
              <div className='ns_item DblProduct'>
                <div className='item_1 scale'>
                  <img src={img1} className='w-100 h-100 object-fit-cover' />


                </div>
                <div className='disss mt-0'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='productNamex  productnameF headline ps-3'>
                      PERREGAUX
                    </span>
                    <span className='headline'>
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                    </span>
                  </div>
                  <em className='productNamex productNamexx headline'>
                    &#8377; 109999.00
                  </em>


                </div>

                <div className='item_2 scale'>
                  <img src={img4} className='w-100 h-100 object-fit-cover' />
                </div>

              </div>
              <div className='disss ms-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='productNamex  productnameF headline ps-3'>
                    ANONIMO
                  </span>
                  <span className='headline'>
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                  </span>
                </div>
                <em className='productNamex productNamexx headline'>
                  &#8377; 309999.00
                </em>


              </div>



            </div>
            <div className='itemsz'>
              <div className='ns_item DblProduct'>
                <div className='item_1 scale'>
                  <img src={img2} className='w-100 h-100 object-fit-cover' />

                </div>
                <div className='disss mt-0'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='productNamex  productnameF headline ps-3'>
                      SEAMASTER
                    </span>
                    <span className='headline'>
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                      <img src={star} className='starImg' />
                    </span>
                  </div>
                  <em className='productNamex productNamexx headline'>
                    &#8377; 103499.00
                  </em>


                </div>

                <div className='item_2 scale'>


                  <img src={img3} className='w-100 h-100 object-fit-cover' />


                </div>

              </div>

              <div className='disss ms-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='productNamex  productnameF headline ps-3'>
                    HUBLOT
                  </span>
                  <span className='headline'>
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                    <img src={star} className='starImg' />
                  </span>
                </div>
                <em className='productNamex productNamexx headline'>
                  &#8377; 305999.00
                </em>


              </div>
            </div>

          </div>

        </div>


        <div className='newsletter'>
          <div className='Ncontent'>
            <h3 className='newsletter_heading fs-1 headline'>
              Newsletter
            </h3>
            <span className='discripation headline fs-7'>
              In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document
              or a typeface without relying on meaningful

            </span>

          </div>
          <div className='subscribe headline'>

            <div className='ns_subscribe'>
              <input type='email' className='email_id' placeholder='Email Address' />
              <button className='headline subscribe_btn'>Subscribe</button>

            </div>
          </div>

        </div>





        <Footer />

      </div>
    </>
  )
}
