// Style
import capsuleStyle from "./Capsule.module.scss"

const Capsule = ({ icon, data }) => {
  return (
    <article className={capsuleStyle.wrapper}>
      <img src={icon} alt={`Icone ${data.kind}`} />
      <div className={capsuleStyle.text}>
        <p className={capsuleStyle.value}>
          {data.value}
          {data.unit}
        </p>
        <p className={capsuleStyle.kind}>{data.kind}</p>
      </div>
    </article>
  )
}

export default Capsule
