import React ,{useState,useContext}from 'react'
import { ProductContext } from '../Global/ProductContext'
import Search  from './Search';
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';
const Navbar = () => {
  const[isMobile,setIsMobile]=useState(false);  
  const {qty}=useContext(CartContext);
  const {products}= useContext(ProductContext);
  console.log(products);
    return (
        <>  
          <div className="headerLine">
               <div className="logo">
                  <Link to="/">Achar</Link>
               </div>
                
              <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                   onClick={()=>setIsMobile(false)}
                   >
                {/* <ul className="left">
                    <li><Link to="/">Achar</Link></li>
                </ul>
                <ul className="product-nav">
                    <li><Link to="/"></Link></li>
                </ul>
                <ul className="connect-nav">
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <ul className="about-nav">
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>

                <ul className="#">
                    <li><Search/></li>
                </ul>
                
                
                
                <ul className="right">
                    <li><Link to="cart"><span className="shopingLogo"><i class="fas fa-shopping-cart"></i><span className="cartCount">{qty}</span></span></Link></li>
                </ul> */}

                <li><Link to="/login">LOGIN</Link></li> 
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                

                </ul>
                <div className="searchBar"><Search/></div>
                <div className="shopingLogoCard"><Link to="cart"><span className="shopingLogo"><i class="fas fa-shopping-cart"></i><span className="cartCount">{qty}</span></span></Link></div>
                
                <button className="mobile-menu-icon" onClick={()=>setIsMobile(! isMobile)}>
                    {isMobile ? (
                        <i class="fas fa-times"></i>
                    ):(
                        <i class="fas fa-bars"></i>
                    )
                    }
                </button>
             </div>  
        </>
    )
}

export default Navbar;
