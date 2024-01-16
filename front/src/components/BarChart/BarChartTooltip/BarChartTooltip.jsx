// Style
import customStyle from "./BarChartTooltip.module.scss"

// Props type checking
import propTypes from "prop-types"

const BarChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={customStyle.wrapper}>
        <p className={customStyle.label}>{`${payload[0].value}kg`}</p>
        <p className={customStyle.label}>{`${payload[1].value}Kcal`}</p>
      </div>
    )
  }
}

BarChartTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
  length: propTypes.number,
  value: propTypes.number
}

export default BarChartTooltip
