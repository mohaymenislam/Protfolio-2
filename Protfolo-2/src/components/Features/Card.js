import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

const Card = (props) => {
    return (
        <>

                <div className="box btn_shadow">
                     <img src={props.image} alt="" />
                         <h1>{props.title}</h1>
                         <p>{props.desc}</p>

                          <a href="/" >

                         <FaArrowRight size={30} style={{color: 'white'}}></FaArrowRight>
                         </a>
                </div>   
        </>
    );
};

export default Card;