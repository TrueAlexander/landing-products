import './ProductHead.css'
import {useState, useEffect} from 'react'
import 'animate.css'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'

const ProductHead = ({dataToRender}) => {

  const [typeSelected, setTypeSelected] = useState("Todos")
  const [burger, setBurger] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const categories = ["Todos", "Eletrodomésticos", "Cozinha", "Banheiro", "Decoração", "Móveis"]

  const changeTypeHandler = (e) => {
    setTypeSelected(e.target.innerText)
    setBurger(false)
  }

  useEffect(() => {
    dataToRender(typeSelected)
  }, [typeSelected])

  useEffect(() => {

  }, [innerWidth])

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

  const burgerClick = () => {
      setBurger(!burger)   
  }

  useEffect(() => {
      burger && window.innerWidth < 940 ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' 
    }, [burger])

  return (
    <div className="productHead">
      <div className="container">
        <div className="toggle-product">
          {productCategories()}
        </div>
          <div className='hamburger' onClick={burgerClick}>
          {burger ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
        </div>
        {burger && <ul 
            className={burger 
                ? 'nav-menu active animate__animated animate__fadeIn' 
                : 'nav-menu'
            }
        >
          {productCategories()}  
        </ul>}
      
      </div>     
    </div>
  )
}

export default ProductHead