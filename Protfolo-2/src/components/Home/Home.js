import React from 'react';
import './Home.css';

import hero from '../../pic/hero.png';
import skills1 from '../../pic/skill1.png';
import skills2 from '../../pic/skill2.png';
import skills3 from '../../pic/skill3.png';

import {FaFacebook , FaInstagram , FaLinkedinIn} from 'react-icons/fa'

import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <>
          <section className='hero' id='home'>
              <div className="container f_flex top">
                 <div className="left top">
                     <h3>WELCOME TO MY WORLD</h3>
                      <h1>I ' m <span>Jone Lee</span></h1>
                      <h2>
                        a <span>
                        <Typewriter
            words={[ 'Professional', 'Coder.',  'Developer ']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                        </span>
                      </h2>

                      <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        
                        <div className="hero_btn f_flex">
                            <div className="col_1">

                                <h4>FIND WITH ME</h4>

                                  <div className="button" >
                                      <button className='btn_shadow'>
                                         <FaFacebook size={25} className='fab'></FaFacebook>
                                      </button>
                                      <button className='btn_shadow'>
                                         <FaInstagram  size={25} className='fab'></FaInstagram>
                                      </button>
                                      <button className='btn_shadow'>
                                        <FaLinkedinIn  size={25} className='fab'></FaLinkedinIn>
                                      </button>
                                  </div>
                            </div>
                                <div className="col-1">
                                    <h4>BEST SKILL ON</h4>
                                       <button className='btn_shadow'>
                                           <img src={skills1} alt="" />
                                       </button>
                                       <button className='btn_shadow'>
                                           <img src={skills2} alt="" />
                                       </button>
                                       <button className='btn_shadow'>
                                           <img src={skills3} alt="" />
                                       </button>
                                </div>
                        </div>
                 </div>
                   <div className="right">
                      <div className="right_img">
                          <img src={hero} alt="" />
                      </div>
                   </div>
              </div>
            </section>   
        </>
    );
};

export default Home;