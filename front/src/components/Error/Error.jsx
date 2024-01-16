// Props type checking
import PropTypes from "prop-types"

// Style
import errorStyle from "./Error.module.scss"

const Error = ({ img, alt, message }) => {
  return (
    <main className={errorStyle.main}>
      <section className={errorStyle.container}>
        <img src={img} alt={alt} />
        <p className={errorStyle.text}>{message}</p>
      </section>
    </main>
  )
}

Error.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  message: PropTypes.string
}

export default Error
