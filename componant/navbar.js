import React from 'react'; 
import logo from "../assets/p1.png";
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import'../style/NavbarStyle.css'
function navbar() {
  return (
    <div className='navbar'>

        <div className='left'>
                <img src={logo}/>

        </div>
        <div className='right'>
        <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button>
            
          <ListIcon/>
          
          </button>
       




        </div>

    </div>


  )
}

export default navbar;