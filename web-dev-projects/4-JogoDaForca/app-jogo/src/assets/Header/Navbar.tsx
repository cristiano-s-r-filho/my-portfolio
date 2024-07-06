import logo from './../../../public/logo-alura.png'
import "./Navbar.css"

export default function Navbar () {
    return(
        <div className='top-div'>
            <img className= " top-logo" src={logo} alt="Logo Laura" />
        </div>
    )
}