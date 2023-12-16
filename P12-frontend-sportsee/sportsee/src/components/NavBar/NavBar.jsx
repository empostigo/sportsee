// React
import { Link } from "react-router-dom"

// Images
import zen from "../../assets/navbar/zen.svg"
import swimming from "../../assets/navbar/swimming.svg"
import cycle from "../../assets/navbar/cycle.svg"
import barebell from "../../assets/navbar/barebell.svg"

// Style
import navbarStyle from "./NavBar.module.scss"

const NavBar = () => {
  return (
    <nav className={navbarStyle.nav}>
      <Link to="#">
        <img className={navbarStyle.img} src={zen} alt="Yoga" />
      </Link>
      <Link to="#">
        <img className={navbarStyle.img} src={swimming} alt="Natation" />
      </Link>
      <Link to="#">
        <img className={navbarStyle.img} src={cycle} alt="Vélo" />
      </Link>
      <Link to="#">
        <img className={navbarStyle.img} src={barebell} alt="Musculation" />
      </Link>
    </nav>
  )
}

export default NavBar
