// Components
import Error from "./Error"

// Assets
import error404 from "../../assets/errors/404.svg"

const Error404 = () => {
  return (
    <>
      <Error
        img={error404}
        alt="Erreur 404"
        message="La page que vous demandez n'existe pas."
      />
    </>
  )
}

export default Error404
