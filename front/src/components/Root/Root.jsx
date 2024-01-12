// React
import { useEffect, useState } from "react"

// React-Router
import { useParams } from "react-router-dom"

// axios
import axios from "axios"

// Components
import Main from "../Main/Main"
import ErrorAPI from "../Error/ErrorAPI"
import ErrorNoUser from "../Error/ErrorNoUser"

const Root = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    axios(`http://localhost:3000/user/${id}/user-data`)
      .then(response => {
        setData(response.data)
      })
      .catch(() => {
        setData(undefined)
      })
  }, [id])

  if (data === undefined) return <ErrorAPI />
  if (!data) return <ErrorNoUser />

  return <Main data={data} />
}

export default Root
