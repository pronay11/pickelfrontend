import React,{useState,useContext} from 'react'
import { CartContext } from '../Global/CartContext'
import logo from '../images/achar.jpeg'
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Cart = () => {
    const {shopingCart,totalPrice,qty,dispatch} =useContext(CartContext);
    
    return (
        <>
           <div className="cart-container">
               <div className="cart-detail" style={{marginTop:'100px'}}>
                   {shopingCart.length > 0 ? shopingCart.map(cart=>(
                       <div className="cart" key={cart.id}>
                           <span className="cart-image">
                              <img src={cart.image} alt="No img"/>
                           </span>
                           <span className="cart-product-name">{cart.name}</span>
                           <span className="cart-product-price">{cart.price}</span>
                           <span className="inc" onClick={()=>dispatch({type:'INC',id:cart.id,cart})}><i class="fas fa-plus"></i></span>
                           <span className="quantity">{cart.qty}</span> 
                           <span className="dic" onClick={()=>dispatch({type:'DIC',id:cart.id,cart})}><i class="fas fa-minus"></i></span>
                           <span className="cart-total-price">{cart.price*cart.qty}</span>
                           <span className="cart-product-delete" onClick={()=>dispatch({type:'DELETE',id:cart.id,cart})}><i class="fas fa-trash"></i></span>
                       </div>
                   ))
                   
                   :"Sorry the cart is empty..."}

                </div>
              
                {shopingCart.length > 0 ? <div className="cart-summary">
                   <div className="summary" ref={ref}>
                       <h3>Cart Summary</h3>
                       <div className="total-items">
                           <div className="items">
                              Total Items
                           </div>
                           <div className="items-count">{qty}</div>
                       </div>
                       <div className="total-price-section">
                           <div className="just-tittle">
                                Total price
                           </div>
                           <div className="items-price">
                              {totalPrice}
                           </div>
                       </div>

                    </div>
                    
                        
                    <Pdf targetRef={ref} filename="post.pdf">
                        {({ toPdf }) => <button className="invoice" onClick={toPdf}>Invoice</button>}
                    </Pdf>
                    </div> : ''}
                   
               
           </div> 
        </>
    )
}

export default Cart;
