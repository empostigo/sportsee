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

export default LineTooltip
