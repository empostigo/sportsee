import customStyle from "./BarChartTooltip.module.scss"

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

export default BarChartTooltip
