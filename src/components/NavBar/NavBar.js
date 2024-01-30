import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Gin Traders</h1>
            <div>
                <button>Destilados</button>
                <button>Gaseosas</button>
                <button>Botánicos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar