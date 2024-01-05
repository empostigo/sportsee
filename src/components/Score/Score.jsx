// Style
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import scoreStyle from "./Score.module.scss"

const Score = ({ data }) => {
  const normalizedData = [
    { value: 100, fill: "#fff" },
    { value: data, fill: "#ff0000" }
  ]

  return (
    <article className={scoreStyle.wrapper}>
      <h2 className={scoreStyle.title}>Score</h2>
      <div className={scoreStyle.background}>
        <p className={scoreStyle.emphasized}>{data}%</p>
        <p className={scoreStyle.text}>
          de votre
          <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="56%"
          outerRadius="76%"
          startAngle={90}
          endAngle={450}
          data={normalizedData}
        >
          <RadialBar dataKey="value" cornerRadius={10} max={100} />
        </RadialBarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default Score
