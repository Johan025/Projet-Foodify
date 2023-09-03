import React from 'react';
import logo from './../assets/logo_.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (

               <header className='nav'>
               <h1><img src={logo} alt="" className='logo' /> Foodify.</h1>
                       <ul>
                         

                           <li> <FontAwesomeIcon icon={faHouse} className='i'/> <h1 className='h1'>Accueil</h1></li>
                           <li> <FontAwesomeIcon icon={faNewspaper} className='i'/> <h1 className='h1'>Nouveautés</h1></li>
                           <li> <FontAwesomeIcon icon={faNewspaper} className='i'/> <h1 className='h1'>Catégories</h1></li>
                           <li> <FontAwesomeIcon icon={faTruck} className='i'/> <h1 className='h1'>Service Livraison</h1></li>
                           <li><FontAwesomeIcon icon={faMessage} className='i'/> <h1 className='h1'>Message</h1></li>
                           <li><FontAwesomeIcon icon={faCartShopping} className='i'/> <h1 className='h1'>Votre achat</h1></li>
                           <li><div className='lig'></div></li>
                           <li className='user'><FontAwesomeIcon icon={faUser} className='i1'/> <h1 className='h1' id='h2'>Se connecter</h1></li>
                           <li><div className='lig1'></div>
                           
                                <h3>Copyright  2023 par I-dev</h3>
                           </li>
                       </ul>
               </header>
        
    );
};

export default Navbar;