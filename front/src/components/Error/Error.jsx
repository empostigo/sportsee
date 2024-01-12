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

export default Error
