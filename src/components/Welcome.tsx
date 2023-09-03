import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import couv from './../assets/couv.jpg';


const Welcome = () => {
    return (
        <div className='welcome'>
            <input type="search" name="search" id="search" placeholder='Entrez votre commande...' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search_'/>

            <div className="bg">
                       <img src={couv} alt="" />
            </div>
        </div>
    );
};

export default Welcome;