// React
import { Link } from "react-router-dom"

// Images
import logo from "../../assets/logo.svg"

// Style
import headerStyle from "./Header.module.scss"

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <img className={headerStyle.logo} src={logo} alt="Logo SportSee" />
      <nav className={headerStyle.navBar}>
        <Link className={headerStyle.link} to="#">
          Accueil
        </Link>
        <Link className={headerStyle.link} to="/users">
          Profil
        </Link>
        <Link className={headerStyle.link} to="#">
          Réglage
        </Link>
        <Link className={headerStyle.link} to="#">
          Communauté
        </Link>
      </nav>
    </header>
  )
}

export default Header
