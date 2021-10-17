import React,{useContext} from 'react'
import { ProductContext } from '../Global/ProductContext'
import Banner from './Banner';
import {CartContext} from '../Global/CartContext'

const Products = () => {
    const {products}= useContext(ProductContext);
    //  console.log(products)
    const {dispatch}=useContext(CartContext)
    return (
        <> 
           <div className="container">
               <Banner/>
             <div className="Products">
                 {products.map((product)=>(
                    <div className="product-Card">
                        <div className="product-Id" key={product.id}>
                           
                            <div className="product-img">
                                <img src={product.image} alt="Not Found"/>
                            </div> 
                            <div className="product-detail">
                                <div className="product-name">
                                    {product.name}
                                </div> 
                                <div className="product-price">
                                    {product.price}
                                </div>       
                            </div>  
                            <div className="product-add" onClick={()=> dispatch({type:'ADD_TO_CART',id:product.id,product})}>Add Card</div> 
                            {product.status==='new' ? <div className="new">New</div>:''}
                            {product.status==='popular' ? <div className="popular">Popular</div>:''}    
                        </div>    
                    </div>    
                  ))}

              </div>
            </div> 
        </>
    )
}

export default Products
