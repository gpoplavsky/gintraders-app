import CartWidget from "../CartWidget/CartWidget";
import logo from './logo-2023102520442999664.png';
import './NavBar.css';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to='/'>
                    <img src={logo} width="140px" height="60px" alt="Gin Traders"></img>
                </Link>
            </div>
            <div>
                <NavLink to={`/category/destilados`} className={({isActive})=>isActive ? 'ActiveOption' : 'navbar-button'}>Destilados</NavLink>
                <NavLink to={`/category/gaseosas`} className={({isActive})=>isActive ? 'ActiveOption' : 'navbar-button'}>Gaseosas</NavLink>
                <NavLink to={`/category/botanicos`} className={({isActive})=>isActive ? 'ActiveOption' : 'navbar-button'}>Botánicos</NavLink>
            </div>
            <CartWidget className="Cart"/>
        </nav>
    )
}

export default NavBar