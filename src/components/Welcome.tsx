import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import couv from './../assets/couv.jpg';
import w from './../assets/waves.png';


const Welcome = () => {
    return (
        <div className='welcome'>
       
            <div className="bg">
                     <img src={couv} alt="" /> 
                       <img src={w} alt="" />

            </div>
        </div>
    );
};

export default Welcome;