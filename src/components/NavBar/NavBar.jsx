// React
import { Link } from "react-router-dom"

// Images
import general from "../../assets/navbar/general.svg"
import activity from "../../assets/navbar/activity.svg"
import sessions from "../../assets/navbar/sessions.svg"
import performance from "../../assets/navbar/performance.svg"

// Style
import navbarStyle from "./NavBar.module.scss"

const NavBar = ({ userId }) => {
  return (
    <>
      <nav className={navbarStyle.nav}>
        <Link to="#" className={navbarStyle.link}>
          <img
            className={navbarStyle.img}
            src={general}
            alt="Infos générales"
          />
        </Link>
        <Link to="#" className={navbarStyle.link}>
          <img className={navbarStyle.img} src={activity} alt="Activité" />
        </Link>
        <Link to="#" className={navbarStyle.link}>
          <img
            className={navbarStyle.img}
            src={sessions}
            alt="Temps de sessions moyen"
          />
        </Link>
        <Link to="#" className={navbarStyle.link}>
          <img
            className={navbarStyle.img}
            src={performance}
            alt="Performance"
          />
        </Link>
      </nav>
    </>
  )
}

export default NavBar
