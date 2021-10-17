import React,{createContext,useState,useEffect} from 'react'

import img1 from "../images/pic1.jpg";
import img2 from "../images/pic2.jpg";
import img3 from "../images/pic3.jpg";
import img4 from "../images/pic4.jpg";
import img5 from "../images/pic1.jpg";
import img6 from "../images/pic2.jpg";
import img7 from "../images/pic3.jpg";
import img8 from "../images/pic4.jpg";
import axios from 'axios';


export const ProductContext=createContext();

const ProductContextProvider = (props) => {
    const [products,setProducts] = useState([
        // {id:1,name:"Amloki Achar",price:300,image:img1,status:"new"},
        // {id:2,name:"Garlic Achar",price:300,image:img2,status:"popular"},
        // {id:3,name:"Lemon Achar",price:350,image:img3,status:"new"},
        // {id:4,name:"Amloki Achar",price:250,image:img4,status:"popular"},
        // {id:5,name:"Lemon Achar",price:400,image:img5,status:"popular"},
        // {id:6,name:"Mango Achar",price:300,image:img6,status:"new"},
        // {id:7,name:"Garlic Achar",price:300,image:img7,status:"popular"},
        // {id:8,name:"Amloki Achar",price:300,image:img8,status:"new"},

    ])
    const getProducts = async() =>{
        const response = await axios.get('http://127.0.0.1:8000/api/')
        console.log(response)
        setProducts(response.data)
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <ProductContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
