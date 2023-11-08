import React, { useState } from 'react'
import ProductHead from '../components/productHead/ProductHead'
import Navbar from '../components/navbar/Navbar'
import filterRender from '../utils/filterRender'
import 'animate.css'
import Products from '../components/products/Products'
import Home from '../components/home/Home'


const ProductPage = () => {

  //get request(state) from MainPage 

  const typeMainPage = "Todos"
  
  const [typeRender, setTypeRender] = useState(typeMainPage)


  //get request from productHead
  const dataToRender = (typeSelected) => {
    
    setTypeRender(typeSelected)
    
  }


  return (
    <>
      <Navbar fullNav={false}/>
      {/* <Home /> */}
      {/* <Products /> */}
      <ProductHead dataToRender={dataToRender}/>
      <div className="animate__animated animate__fadeIn animate__slow" key={filterRender(typeRender)}>
        {filterRender(typeRender)}
      </div>   
    </>
  )
}

export default ProductPage