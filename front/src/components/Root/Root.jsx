// React
import { useEffect, useState } from "react"

// axios
import axios from "axios"

// Components
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

const Root = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios("http://localhost:3000/user/18/user-data")
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.error("Erreur de requête Axios :", error))
  }, [])

  if (!data) {
    return <p>Chargement en cours...</p>
  }

  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  )
}

export default Root
