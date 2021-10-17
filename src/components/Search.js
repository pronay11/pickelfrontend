import React,{useState,useContext} from 'react'
import { ProductContext } from '../Global/ProductContext'


const Search = () => {
  const {products}= useContext(ProductContext);
  // console.log(products);
  const [filter,setFilter]=useState('');
  const searchText=(event)=>{
    setFilter(event.target.value);
  }
  let dataSearch=products.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  });
   console.log(dataSearch);
  return (
      <> 
         
      

       <div className="searchBox">
         <input className="searchInput" type="text" value={filter} onChange={searchText.bind(this)} placeholder="Search" />
          <button className="searchButton" href="#">
          <i className="material-icons">
              search
          </i>
         </button>


        
        { filter === "" ? null : dataSearch.map((item,index)=>{
          
        return(
              
              <div className="search-card-body">
                <div className="search-image">
                  <img src={item.image} alt="no-image" />
                </div>
                <div className="card-body">
                  <h5 className="card-tittle">{item.name}</h5>
                  <p className="card-price">{item.price}</p>
                </div>
                
              </div>
          
         )
          
        })}
        
        
      </div>
      
    </>
  )
}

export default Search;
