import React from 'react'
import { Link } from 'react-router-dom';
import storeimage from './assest/images/storeImage.webp'


export default function Footer() {
    return (
        <>



            <div className=' m-auto mt-5 AboutFooter'>
                <div className='newsletter headfooter text-center border-0 ps-5'>
                    {/* <div className='Ncontent footer m-auto'> */}





                        <div className='footerItems_1 '>
                            <img src={storeimage} className='img-fluid object-fit-cover rounded rounded-2' />
                            <address className='headline '>
                                717 South ex metro station gate no 2 g block 110023
                            </address>
                        </div>


                        <div className='footerItems_2 order-3'>
                            <ul className='text-start footerNav pt-4flink'>
                                <li className=' d-block m-auto text-start text-white fs-6'><strong>MAIN MENU</strong></li>
                                <li className='flink'><Link to={'home'} className=''>Home</Link></li>
                                <li className='flink'><Link to={'about'} className=''>About</Link></li>
                                <li className='flink'><Link to={'shop'} className=''>Shop</Link></li>
                                <li className='flink'><Link to={'help'} className=''>Help</Link></li>

                            </ul>

                        </div>
                        <div className='footerItems_3'>
                            <ul className='text-start footerNav pt-4flink'>
                                <li className=' d-block m-auto text-start text-white fs-6'><strong>COMPANY</strong></li>
                                <li className='flink'><Link to={'company'} className=''>The Company</Link></li>
                                <li className='flink'><Link to={'careers'} className=''>Careers</Link></li>
                                <li className='flink'><Link to={'press'} className=''>Press</Link></li>


                            </ul>
                        </div>
                        <div className='footerItems_4'>
                            <ul className='text-start footerNav pt-4flink'>
                                <li className=' d-block m-auto text-start text-white fs-6'><strong>DISCOVER</strong></li>
                                <li className='flink'><Link to={'team'} className=''>The Team</Link></li>
                                <li className='flink'><Link to={'history'} className=''>Our History</Link></li>
                                <li className='flink'><Link to={'motto'} className=''>Brand Motto</Link></li>


                            </ul>
                        </div>
                        <div className='footerItems_5'>
                            <ul className='text-start footerNav pt-4flink'>
                                <li className=' d-block m-auto text-start text-white fs-6'><strong>FIND US ON</strong></li>
                                <li className='flink'><Link to={'instagram'} className=''>Instagram</Link></li>
                                <li className='flink'><Link to={'facebook'} className=''>Facebook</Link></li>
                                <li className='flink'><Link to={'twitter'} className=''>Twitter</Link></li>


                            </ul>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
