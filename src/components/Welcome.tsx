import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import couv from './../assets/couv.jpg';
import w from './../assets/waves.png';


const Welcome = () => {
    return (
        <div className='welcome'>

            <div className='desc'>
                  <h1>Explorer le meilleur restaurant de la ville</h1>
                  <h2 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut porro esse incidunt ipsa distinctio quisquam repellat recusandae delectus magnam dolore, amet sapiente aliquam adipisci sit, aliquid sequi perspiciatis optio.</h2>
                  <button className='btn bouton  mt-4'>Se connecter pour commander</button>
            </div>

       
            <div className="bg">
                     
            </div>
        </div>
    );
};

export default Welcome;