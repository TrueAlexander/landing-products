import {BsFillHouseFill} from 'react-icons/bs'


import './Navbar.css'

const Navbar = ({fullNav}) => {



    return (
        <div className='navbar' style={fullNav ? {position: "absolute"} : {position: "static"}}>
            <div className='container'>
                <h1><span><BsFillHouseFill />Catálogo</span> de Produtos</h1>

            </div>
        </div>
    )
}

export default Navbar
