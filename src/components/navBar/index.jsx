import logoRugby from "../../imagenes/logo_transparent.png"
import CartWidget from "../cartWidget"
import "./styleNavBar.css"


const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <li className="nav-item lgYTit">
          <img src={logoRugby} className="logoStyle" alt="" />
        </li>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link text-light">Contacto</p>
            </li>
            <li className="nav-item">
              <p className="nav-link text-light">Sobre Nosotros</p>
            </li>
          </ul>
          <ul className="navbar-nav">
            <CartWidget />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar