// Components
import Error from "./Error"

import img from "../../assets/errors/500.svg"

const ErrorAPI = () => {
  return (
    <>
      <Error
        img={img}
        message="Les données de l'utilisateur ne sont pas disponibles."
      />
    </>
  )
}

export default ErrorAPI
