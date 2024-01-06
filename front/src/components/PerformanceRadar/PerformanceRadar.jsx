// Recharts
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer
} from "recharts"

// Style
import radarStyle from "./PerformanceRadar.module.scss"

const PerformanceRadar = ({ data }) => {
  return (
    <article className={radarStyle.wrapper}>
      <ResponsiveContainer>
        <RadarChart data={data} innerRadius={10} outerRadius="70%">
          <PolarGrid type="circle" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: "0.833vw",
              lineHeight: "24px",
              fill: "#ffffff"
            }}
            dy={3}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default PerformanceRadar
