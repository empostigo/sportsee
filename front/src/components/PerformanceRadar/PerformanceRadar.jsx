// Recharts
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Text
} from "recharts"

// Style
import radarStyle from "./PerformanceRadar.module.scss"

const customedLabels = ({ payload, x, y, cx, cy, ...rest }) => {
  const customStyle = {
    fontSize: "0.833vw",
    fill: "#ffffff"
  }
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 50}
      x={x + (x - cx) / 50}
      style={{ ...rest, ...customStyle }}
    >
      {payload.value}
    </Text>
  )
}

const PerformanceRadar = ({ data }) => {
  return (
    <article className={radarStyle.wrapper}>
      <ResponsiveContainer>
        <RadarChart data={data} innerRadius={10} outerRadius="70%">
          <PolarGrid type="circle" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={props => customedLabels(props)}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default PerformanceRadar
