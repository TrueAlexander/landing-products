import './ProductHead.css'
import {useState, useEffect} from 'react'
import 'animate.css'

const ProductHead = ({dataToRender}) => {

  const [typeSelected, setTypeSelected] = useState("Todos")

  const categories = ["Todos", "Eletrodomésticos", "Cozinha", "Banheiro", "Decoração", "Móveis"]

  const changeTypeHandler = (e) => {
    setTypeSelected(e.target.innerText)
  }

  useEffect(() => {
    dataToRender(typeSelected)
  }, [typeSelected])

  const productCategories = () => {
    return categories.map(item => {
      return (
        <p 
          className={typeSelected === item ? 'link-product active' : "link-product"}
          onClick={changeTypeHandler}
          key={item}
        >
          {item}
        </p>
        )
      }   
    )
  }

  return (
    <div className="productHead">
      <div className="container">
        <div className="toggle-product">
          {productCategories()}
        </div>     
      </div>     
    </div>
  )
}

export default ProductHead