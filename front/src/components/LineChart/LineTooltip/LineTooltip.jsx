// Props type checking
import PropTypes from "prop-types"

// Style
import tooltipStyle from "./LineTooltip.module.scss"

const LineTooltip = ({ active, payload }) => {
  if (active && payload && payload.length)
    return (
      <div className={tooltipStyle.wrapper}>
        <p className={tooltipStyle.text}>{`${payload[0].value} min`}</p>
      </div>
    )
}

LineTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  length: PropTypes.number
}

export default LineTooltip
