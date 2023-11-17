import {BsFillHouseFill} from 'react-icons/bs'
import Logo from '../../assets/capivaraq.svg'


import './Navbar.css'

const Navbar = () => {

    return (
        <div className='navbar' >
            <div className='container'>
            <div className='logo'>
                        <img src={Logo}/>
                    </div> 
                <h1>
                    <span>Capivara</span> Acha
                </h1>
            </div>
        </div>
    )
}



export default Navbar
