import "./styleCarrito.css"

const CartWidget = () =>{
    return(
        <li className="nav-item imgCarrYCont">
            <button className="carrito"></button>
            <span className="contadorCarrito">0</span>
        </li>
    )
}
export default CartWidget