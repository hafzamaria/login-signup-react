import {Link} from 'react-router-dom';
import './index.css'
import { useContext } from "react";
import { GlobalContext } from '../../context';

const NavBar= () => {
    let { state, dispatch } = useContext(GlobalContext);
    return(
    //   <div className='nav1'>
        
          <nav className='nav'>
          <div className='userName'>
          {state?.user?.firstName} {state?.user?.lastName}</div>
            <ul>
  
              <li><Link to="/">Home</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/signup">Signup</Link></li>

              <li><Link to="/login">Login</Link></li>
  
            </ul>
          </nav>
        //   </div>
    )
  
  }
  export default NavBar;