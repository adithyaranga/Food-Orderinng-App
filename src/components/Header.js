import { useState } from "react";
import {Link} from 'react-router-dom';
const Header=()=>{
    const [buttonname,setbuttonname]=useState("login");
    return(
        <div className="header">
            <div className="logo">
            <img className="logo-image"src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"/>
            </div>

            <div className="nav-items">

                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={
                        ()=>{
                         if(buttonname==="login"?setbuttonname("logout"):setbuttonname("login"));
                        }
                    }
                    >{buttonname}</button>
                  </ul>
            </div>

        </div>
    )
}

export default Header