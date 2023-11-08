import React, { useState } from 'react'
import ProductHead from '../components/productHead/ProductHead'
import Navbar from '../components/navbar/Navbar'
import filterRender from '../utils/filterRender'
import 'animate.css'


const ProductPage = () => {

  const [typeRender, setTypeRender] = useState("Todos")

  //get request from productHead
  const dataToRender = (typeSelected) => {
    setTypeRender(typeSelected) 
  }

  return (
    <>
      <Navbar fullNav={false}/>
      <ProductHead dataToRender={dataToRender}/>
      <div className="animate__animated animate__fadeIn animate__slow" key={filterRender(typeRender)}>
        {filterRender(typeRender)}
      </div>   
    </>
  )
}

export default ProductPage