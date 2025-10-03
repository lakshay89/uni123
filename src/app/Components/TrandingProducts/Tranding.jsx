import Image from 'next/image'
import React from 'react'
// import pic1 from '@/Assets/Images/salon.avif'
// import pic2 from '@/Assets/Images/doctor.jpg'
// import pic3 from '@/Assets/Images/receptionist.jpg'
// import pic4 from '@/Assets/Images/Corporate.jpg'
// import pic5 from '@/Assets/Images/security.png'
// import pic6 from '@/Assets/Images/salon.avif'
import pic1 from '@/Assets/Images/item.jpg'
import pic2 from '@/Assets/Images/item2.jpg'
import pic3 from '@/Assets/Images/item1.jpg'
import pic4 from '@/Assets/Images/Background1.jpg'
import pic5 from '@/Assets/Images/security.png'
import pic6 from '@/Assets/Images/item.jpg'


// import { FaInstagram } from "react-icons/fa6";
// import { FiYoutube } from "react-icons/fi";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";

import './topUniform.css'

export default function Tranding() {


    const products = [
        {id:1 , title : 'Salon' , subtitle:"Stylish Salon Apron with Double Pocket" , image:pic1},
        {id:2 , title : ' Hospital' , subtitle:"Full Sleeve Back Adjuster Lab Coat" , image:pic2},
        {id:3 , title : 'Reception' , subtitle:"Stylish Grey Tunic for Women" , image:pic3},
        {id:4 , title : 'Corporate' , subtitle:"Maroon Uniform Polo T-Shirt" , image:pic4},
        {id:5 , title : 'Security' , subtitle:"Black Chef Coat with White Piping" , image:pic5},
        {id:6 , title : 'Spa ' , subtitle:"Stylish Spa Apron with Double Pocket" , image:pic6},

       
    ]





  return (
   <>
   <div className='trandUniformMainSec'>
     <div className='text-center mb-5 '>
        <h2 className='tradingHeading'>Top Tranding Products </h2>
     </div>
    <div className="container">
        <div className="row uniform-row">
           {products.map((item,index)=>(
              <div className="col-md-2 col-6 topTrandingCol" key={index}>
                  <div className='UniformCard'>
                    <div className='d-flex justify-content-center'>
                    <Image src={item.image} alt={item.title} className='ProductImg'/>
                    </div>
                    <div className='detailSec'>
                        <h3 className='title text-dark'>{item.title}</h3>
                        <p className='truncate'>{item.subtitle}</p>
                        {/* <div className='icons'>
                        <FaInstagram  className='fs-5'/> < FiYoutube className='fs-5'/> < FaFacebookSquare  className='fs-5'/> <FaTwitter className='fs-5'/>
                        </div> */}
                    </div>
                  </div>
              </div>
           ))

           }
        </div>
    </div>

   </div>
   
   </>
  )
}
