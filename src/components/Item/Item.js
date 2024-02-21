import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="card">
            <header className="card-header">
                <h2 className="card-header-title">{name}</h2>
            </header>
            <picture className="card-image">
                <img className="image" src={img} alt={name}/>
            </picture>
            <section className="card-content">
                <p className="content">
                    Precio: ${price}
                </p>
                <p className="content">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="card-footer">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item