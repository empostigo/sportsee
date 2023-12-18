// React
import { Link, useParams } from "react-router-dom"

// Images
import general from "../../assets/navbar/general.svg"
import activity from "../../assets/navbar/activity.svg"
import sessions from "../../assets/navbar/sessions.svg"
import performance from "../../assets/navbar/performance.svg"

// Style
import navbarStyle from "./NavBar.module.scss"

const NavBar = () => {
  const { userId } = useParams()
  console.log(userId)

  return (
    <>
      <nav className={navbarStyle.nav}>
        <Link to={`/user/${userId}`}>
          <img className={navbarStyle.img} src={general} alt="Yoga" />
        </Link>
        <Link to={`/user/${userId}/activity`}>
          <img className={navbarStyle.img} src={activity} alt="Natation" />
        </Link>
        <Link to={`/user/${userId}/average-sessions`}>
          <img className={navbarStyle.img} src={sessions} alt="Vélo" />
        </Link>
        <Link to={`/user/${userId}/performance`}>
          <img
            className={navbarStyle.img}
            src={performance}
            alt="Musculation"
          />
        </Link>
      </nav>
    </>
  )
}

export default NavBar
