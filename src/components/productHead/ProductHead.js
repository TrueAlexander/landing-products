import './ProductHead.css'
import { AiOutlineSearch } from 'react-icons/ai'
// import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import 'animate.css'

const ProductHead = ({dataToRender}) => {

  const [animated, setAnimated] = useState(false)

  const [typeSelected, setTypeSelected] = useState("Todos")

  const changeTypeHandler = (e) => {
    setTypeSelected(e.target.innerText)
    setAnimated(true)
  }

  useEffect(() => {
    dataToRender(typeSelected)
  }, [typeSelected])

  return (
    <div className="productHead">
      <div className="container">
        <div className="toggle-product">
          <p 
            className={typeSelected === "Todos" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Todos
          </p>
          <p 
            className={typeSelected === "Apartamento" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Apartamento
          </p>
          <p 
            className={typeSelected === "Casa" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Casa
          </p>
          <p 
            className={typeSelected === "Kitnet" ? 'link-product active' : "link-product"}
            onClick={changeTypeHandler}
          >
            Kitnet
          </p>
        </div>     
      </div>     
    </div>
  )
}

export default ProductHead