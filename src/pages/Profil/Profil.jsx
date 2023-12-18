// data
import data from "../../fixtures/user.json"

// Components
import ActivityBar from "../../components/ActivityBar/ActivityBar"

// Style
import profilStyle from "./Profil.module.scss"
import { useParams } from "react-router-dom"

const Profil = () => {
  const { id } = useParams()
  const { activity } = data.find(user => user.userId === parseInt(id))

  return <ActivityBar data={activity} />
}

export default Profil
