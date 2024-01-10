import React from 'react'
import '../App.css';
import bk from './assest/images/background.jpg'
import video from './../default.mp4'
import rightarrow from './assest/icons/chevron-right.svg'
import leftarrow from './assest/icons/chevron-left.svg'
import { Link } from 'react-router-dom';


export default function Home() {


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
                <h3 className='display-5 text-white text-center headline'>
                  <span >
                    Product
                  </span>
                </h3>





                <div className='items'>
                  <div className='slider'>
                    <div className='item'>
                      <div className='ns-item'>

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>

                      </div>
                    </div>
                    <div className='item'>
                      <div className='ns-item'>

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


        <div className='conteniar-1'>
          <div className='secondDiv d-flex justify-content-center align-items-center position-relative'>
            <div>
              <h3 className='featureProductHeading display-5 text-center'>
               Feature Product
              </h3>





              <div className='Featur_slider'>
                <div className='Feature_items'>
                  <div className='Feature_item'>
                    <div className='ns_Feature_item'>

                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-5 text-white'>
                        ProductName
                      </span>
                      <br />

                      <span className='productName fs-6 text-white'>
                        $552
                      </span>
                    </div>

                  </div>
                  <div className='Feature_item'>
                    <div className='ns_Feature_item'>

                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-5 text-white'>
                        ProductName
                      </span>
                      <br />

                      <span className='productName fs-6 text-white'>
                        $552
                      </span>
                    </div>
                  </div>
                  <div className='Feature_item'>
                    <div className='ns_Feature_item'>

                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-5 text-white'>
                        ProductName
                      </span>
                      <br />

                      <span className='productName fs-6 text-white'>
                        $552
                      </span>
                    </div>
                  </div>
                  <div className='Feature_item'>
                    <div className='ns_Feature_item'>

                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-5 text-white'>
                        ProductName
                      </span>
                      <br />

                      <span className='productName fs-6 text-white'>
                        $552
                      </span>
                    </div>
                  </div>
                  <div className='Feature_item'>
                    <div className='ns_Feature_item'>

                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-5 text-white'>
                        ProductName
                      </span>
                      <br />

                      <span className='productName fs-6 text-white'>
                        $552
                      </span>
                    </div>
                  </div>
                  <div className='Feature_item'>
                    <div className='ns_Feature_item'>

                    </div>
                    <div className='content text-center p-3'>
                      <span className='productName fs-5 text-white'>
                        ProductName
                      </span>
                      <br />

                      <span className='productName fs-6 text-white'>
                        $552
                      </span>
                    </div>
                  </div>


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



        <div className='newsletter'>
          <div className='Ncontent'>
            <h3 className='newsletter_heading fs-1 text-white'>
              Newsletter
            </h3>
            <span className='discripation text-white fs-7'>
              In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document
              or a typeface without relying on meaningful

            </span>

          </div>
          <div className='subscribe text-white'>

            <div className='ns_subscribe'>
              <input type='email' className='email_id' placeholder='Email Address' />
              <button className='text-white subscribe_btn'>Subscribe</button>

            </div>
          </div>

        </div>


        <div className='Tproduct'>
          <div className='ns_Tproduct'>
            <div className='itemsz'>

              <div className='ns_item '>kkk
              </div>
              <div className='disss'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='productNamex fs-5 text-white'>
                    ProductName
                  </span>
                  <span className='text-white'>
                    *****
                  </span>
                </div>
                <span className='productNamex fs-6 text-white'>
                  $552
                </span>


              </div>

            </div>

            <div className='itemsz'>
              <div className='ns_item DblProduct'>
                <div className='item_1'>


                </div>
                <div className='disss mt-0'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='productNamex fs-5 text-white ps-3'>
                      ProductName
                    </span>
                    <span className='text-white'>
                      *****
                    </span>
                  </div>
                  <span className='productNamex fs-6 text-white'>
                    $552
                  </span>


                </div>

                <div className='item_2'>





                </div>

              </div>
              <div className='disss ms-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='productNamex fs-5 text-white ps-3'>
                    ProductName
                  </span>
                  <span className='text-white'>
                    *****
                  </span>
                </div>
                <span className='productNamex fs-6 text-white'>
                  $552
                </span>


              </div>



            </div>
            <div className='itemsz'>
              <div className='ns_item DblProduct'>
                <div className='item_1'>


                </div>
                <div className='disss mt-0'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <span className='productNamex fs-5 text-white ps-3'>
                      ProductName
                    </span>
                    <span className='text-white'>
                      *****
                    </span>
                  </div>
                  <span className='productNamex fs-6 text-white'>
                    $552
                  </span>


                </div>

                <div className='item_2'>





                </div>

              </div>
              <div className='disss ms-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='productNamex fs-5 text-white ps-3'>
                    ProductName
                  </span>
                  <span className='text-white'>
                    *****
                  </span>
                </div>
                <span className='productNamex fs-6 text-white'>
                  $552
                </span>


              </div>
            </div>

          </div>

        </div>



        <div className='newsletter text-center'>
          <div className='Ncontent aboout m-auto'>
            <h3 className='newsletter_heading fs-1 aboutHeading text-white'>
             About Your Shop
            </h3>
            <span className='discripation text-white fs-7'>
              In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document
              or a typeface without relying on meaningful

            </span>

          </div>
         

        </div>


        <div className='newsletter headfooter text-center'>
          <div className='Ncontent footer m-auto'>

          <div className='footerItems_1'>
            <img src=''  className=''/>
          <address className='text-white '>
              717 South ex metro station gate no 2 g block 110023
          </address>
          </div>

          <div className='footerItems_2'>
            <ul className='text-start footerNav pt-4flink'>
              <li className=' d-block m-auto text-center text-white fs-6'><strong>MAIN MENU</strong></li>
              <li className='flink'><Link to={'home'} className=''>Home</Link></li>
              <li className='flink'><Link to={'about'} className=''>About</Link></li>
              <li className='flink'><Link to={'shop'} className=''>Shop</Link></li>
              <li className='flink'><Link to={'help'} className=''>Help</Link></li>

            </ul>

          </div>
          <div className='footerItems_3'>
          <ul className='text-start footerNav pt-4flink'>
              <li className=' d-block m-auto text-center text-white fs-6'><strong>COMPANY</strong></li>
              <li className='flink'><Link to={'company'} className=''>The Company</Link></li>
              <li className='flink'><Link to={'careers'} className=''>Careers</Link></li>
              <li className='flink'><Link to={'press'} className=''>Press</Link></li>


            </ul>
          </div>
          <div className='footerItems_4'>
          <ul className='text-start footerNav pt-4flink'>
              <li className=' d-block m-auto text-center text-white fs-6'><strong>DISCOVER</strong></li>
              <li className='flink'><Link to={'team'} className=''>The Team</Link></li>
              <li className='flink'><Link to={'history'} className=''>Our History</Link></li>
              <li className='flink'><Link to={'motto'} className=''>Brand Motto</Link></li>


            </ul>
          </div>
          <div className='footerItems_5'>
          <ul className='text-start footerNav pt-4flink'>
              <li className=' d-block m-auto text-center text-white fs-6'><strong>FIND US ON</strong></li>
              <li className='flink'><Link to={'instagram'} className=''>Instagram</Link></li>
              <li className='flink'><Link to={'facebook'} className=''>Facebook</Link></li>
              <li className='flink'><Link to={'twitter'} className=''>Twitter</Link></li>


            </ul>
          </div>
            
          </div>
        </div>



      </div>
    </>
  )
}
