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
        <RadarChart data={data} outerRadius="70%" innerRadius={10}>
          <PolarGrid
            type="circle"
            radialLines={false}
            polarRadius={[11.25, 22.5, 45, 67.5, 90]}
          />
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
