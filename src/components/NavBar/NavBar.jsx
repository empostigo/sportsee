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
        <Link to={`/user/${userId}`}>
          <img
            className={navbarStyle.img}
            src={general}
            alt="Infos générales"
          />
        </Link>
        <Link to={`/user/${userId}/activity`}>
          <img className={navbarStyle.img} src={activity} alt="Activité" />
        </Link>
        <Link to={`/user/${userId}/average-sessions`}>
          <img
            className={navbarStyle.img}
            src={sessions}
            alt="Temps de sessions moyen"
          />
        </Link>
        <Link to={`/user/${userId}/performance`}>
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
