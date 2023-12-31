import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "../Testimonial/Slide";
import TestimonialApi from "../Testimonial/TestimonialApi"
import {FaArrowLeft , FaArrowRight} from 'react-icons/fa';

const Testimonial = () => {
  const [data, setdata] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial' id='clients'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>WHAT CLIENTS SAY</h4>
            <h1>Testimonial</h1>
          </div>
          <div className='slide'>
           

            {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            <div className='slide_button'>
              <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
              <FaArrowLeft size={40} className="quote i"></FaArrowLeft>
              </button>
              <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
              <FaArrowRight size={40} className="quote i"></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial









// import React, { useEffect, useState } from 'react';
// import './Testimonial.css';
// import Slide from './Slide';
// import {FaArrowLeft , FaArrowRight} from 'react-icons/fa'

// import TestimonialApi from '../Testimonial/TestimonialApi';

// const Testimonial = () => {
//      const [data , setData] = useState(TestimonialApi);
//      const [index , setIndex] = useState(0);

//       useEffect(() => {
//         const lestIndex = data.length - 1
//         if(index < 0){
//             setIndex(lestIndex)
//         }
//         if(index > lestIndex){
//             setIndex(0)
//         }
//       }, [index , data]);

//       useEffect(() => {
//          let slider = setInterval (() => {
//             setIndex(index + 1)
//          })

//          return () => clearInterval(slider)
//       } , [index])

//     return (
//         <>
//           <section className="Testimonial" id="clients">
//                <div className="container">
//                     <div className="heading text-center">
//                         <h4>WHAT CLIENTS SAY</h4>
//                          <h1>Testimonial</h1>
//                     </div>
//                       <div className='slide'>
//                         {
//                             data.map((value , valueIndex) => {
//                                 return <Slide  key={value.id} {...value} valueIndex={valueIndex} index={index} ></Slide>
//                             })
//                         }
                           
//                             <div className="slide_button">
//                                 <button className='btn_shadow prev_btn'>
//                                     <FaArrowLeft size={30}></FaArrowLeft>
//                                 </button>
//                                 <button className='btn_shadow next_btn'>
//                                     <FaArrowRight size={30}></FaArrowRight>
//                                 </button>
//                             </div>
//                       </div>

//                </div>
//             </section>  
//         </>
//     );
// };

// export default Testimonial;