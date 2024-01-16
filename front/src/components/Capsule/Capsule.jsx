// Props type checking
import PropTypes from "prop-types"

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

Capsule.propTypes = {
  icon: PropTypes.string,
  data: PropTypes.object
}

export default Capsule
