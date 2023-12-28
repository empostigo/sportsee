// Recharts
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
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
        <RadarChart data={data} outerRadius="70%">
          <PolarGrid type="circle" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: "12px",
              fill: "#ffffff"
            }}
          />
          <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default PerformanceRadar
