// Recharts
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

// Style
import sessionsStyle from "./SessionsTime.module.scss"

const SessionsTime = ({ data }) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"]
  const xAxisValue = () => data.map(session => days[session.day - 1])
  console.log(xAxisValue())

  return (
    <article className={sessionsStyle.wrapper}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
          <XAxis
            dataKey={xAxisValue}
            tick={{ fill: "white", fontSize: "12px", fontWeight: 400 }}
            tickLine={false}
            axisLine={false}
            padding={{ left: 13, right: 13 }}
          />
          <YAxis dataKey="sessionLength" hide={true} />
          <Tooltip offset={10} width={10} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

export default SessionsTime
