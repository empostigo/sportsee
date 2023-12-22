// data
import data from "../../fixtures/user.json"

// Components
import ActivityBar from "../../components/ActivityBar/ActivityBar"

// Style
import profilStyle from "./Profil.module.scss"
import { useParams } from "react-router-dom"

const Profil = ({ data }) => {
  return <ActivityBar />
}

export default Profil
