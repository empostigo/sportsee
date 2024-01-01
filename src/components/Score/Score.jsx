// Style
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import scoreStyle from "./Score.module.scss"

const Score = ({ data }) => {
  return (
    <article className={scoreStyle.wrapper}>
      <div className={scoreStyle.container}></div>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="66%"
          outerRadius="76%"
          startAngle={90}
          data={data}
        >
          <RadialBar
            dataKey="value"
            data={[data[0]]}
            cornerRadius={10}
            minAngle={15}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default Score
