import React, { useState } from 'react'
import '../Shop.css'
import Watchstrore_1 from './assest/images/Watchstore_1.webp'
import Watchstrore_1_2 from './assest/images/Watchstore_1_2.webp'
import Watchstrore_1_3 from './assest/images/Watchstore_1_3.webp'
import Watchstrore_1_4 from './assest/images/Watchstore_1_4.webp'
import Watchstrore_2 from './assest/images/Watchstore_2.webp'
import Watchstrore_2_2 from './assest/images/Watchstore_2_2.webp'
import Watchstrore_2_3 from './assest/images/Watchstore_2_3.webp'
import Watchstrore_2_4 from './assest/images/Watchstore_2_4.webp'
import Watchstrore_3 from './assest/images/Watchstore_3.webp'
import Watchstrore_4 from './assest/images/Watchstore_4.webp'
import Watchstrore_5 from './assest/images/Watchstore_5.webp'
import Watchstrore_6 from './assest/images/Watchstore_6.webp'
import Watchstrore_7 from './assest/images/Watchstore_7.webp'
import Watchstrore_8 from './assest/images/Watchstore_8.webp'
import Watchstrore_9 from './assest/images/Watchstore_9.webp'
import Watchstrore_10 from './assest/images/Watchstore_10.webp'
import Watchstrore_11 from './assest/images/Watchstore_11.webp'
import Watchstrore_12 from './assest/images/Watchstore_12.webp'
import { Link } from 'react-router-dom'








export default function WatchStore(props) {



    const [Watchstore, useWatchstore] = useState([
        {
            id: 1,
            productName: 'BREITLING',
            color: 'red',
            module: 'Endurance Pro',
            serialNo: 'X82310D91B1S1',
            discripation: 'PROFESSIONAL',
            images: {
                image1: Watchstrore_1,
                image2: Watchstrore_1_2,
                image3: Watchstrore_1_3,
                image4: Watchstrore_1_4,

            },
            price: '₹' + '3,11,600',
            discount:'10%'

        },
        {
            id: 2,
            productName: 'NOMOS GLASHUTTE',
            color: 'red',
            module: 'Club Campus Neomatik',
            serialNo: 'X82310D91B1S1',
            discripation: 'CLUB',
            images: {
                image1: Watchstrore_2,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + '2,78,000',
            discount:'14%'

        },
        {
            id: 3,
            productName: 'RAYMOND WEIL',
            color: 'red',
            module: 'RAYMOND WEIL',
            serialNo: 'X82310D91B1S1',
            discripation: 'FREELANCER',
            images: {
                image1: Watchstrore_3,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + '2,28,000',
            discount:'16%'

        },
        {
            id: 4,
            productName: 'DOXA',
            color: 'red',
            module: 'SUB 300T',
            serialNo: 'X82310D91B1S1',
            discripation: 'SUB 300T Professional',
            images: {
                image1: Watchstrore_4,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + '2,01,000',
            discount:'20%'

        },
        {
            id: 5,
            productName: 'RAYMOND WEIL',
            color: 'red',
            module: 'MAESTRO ',
            serialNo: 'X82310D91B1S1',
            discripation: "Maestro Men's Automatic Visible",
            images: {
                image1: Watchstrore_5,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + ' 1,75,000',
            discount:'16%'

        },
        {
            id: 6,
            productName: 'FREDERIQUE',
            color: 'red',
            module: 'CLASSICS ',
            serialNo: 'X82310D91B1S1',
            discripation: "Classics Delight",
            images: {
                image1: Watchstrore_6,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + ' 1,29,000',
            discount:'18%'

        },
        {
            id: 7,
            productName: 'CARL F. BUCHERER',
            color: 'red',
            module: 'HERITAGE',
            serialNo: 'X82310D91B1S1',
            discripation: "Heritage Bicompax Annual",
            images: {
                image1: Watchstrore_7,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + '12,17,160',
            discount:'20%'

        },
        {
            id: 8,
            productName: 'GIRARD-PERREGAUX',
            color: 'red',
            module: 'BRIDGES',
            serialNo: 'X82310D91B1S1',
            discripation: "Free Bridge",
            images: {
                image1: Watchstrore_8,
                image2: '',
                image3: '',
                image4: '',

            },
            price: '₹' + '23,00,000',
            discount:'8%'

        },


    ])
    return (
        <>
            <div className='container  m-auto '>





                <div className='row mb-5  align-items-start justify-content-start'>

                    {(Watchstore != null) ? Watchstore.map((item) =>
                        <div className='col-md-3 mb-4 pt-4'>
                            <Link className='nav-link text-white storeItem pt-3' to={`/${item.id}`}>
                                <div className='ns_storeItem position-relative' style={{
                                    backgroundImage: `url(${item.images.image1})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',}}>

                                        <span className='text-white bg-danger py-1 px-2 position-absolute offer'>Offer {item.discount}</span>

                                </div>
                                <div className='row px-1 pt-1 watchstoreconteint justify-content-between'>
                                    <strong className='p-0 text-center productnamex'>Brand: {item.productName}</strong>
                                    <p className='p-0 m-0 text-center module'>{item.module}</p>
                                    <p className='m-0 p-0 text-center module'>{item.discripation}</p>
                                    <em className='text-center mt-0 pt-0 watchstorePrice'>Price: {item.price}</em>
                                </div>

                            </Link>  </div>) : '<h3>Lodding</h3>'}

                </div>
            </div>

        </>
    )
}
