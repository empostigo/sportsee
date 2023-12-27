// Recharts
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

// Components
import LineTooltip from "../LineTooltip/LineTooltip"
import LineChartActiveDot from "../LineChartActiveDot/LineChartActiveDot"

// Style
import sessionsStyle from "./SessionsTime.module.scss"
import LineChartCursor from "../LineChartCursor/LineChartCursor"

const SessionsTime = ({ data }) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"]
  const xAxisValue = () => data.map(session => days[session.day - 1])
  const legendFormatter = () => {
    return (
      <p className={sessionsStyle.legend}>
        Durée moyenne des
        <br />
        sessions
      </p>
    )
  }

  const toolTipFormatter = (value, name, props) => {
    const text = ["", " min"]
    return `${value} min`
  }

  const activeDot = () => {
    return <img src="../../assets/dot-active.svg" alt="dot-active" />
  }

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
          <Tooltip cursor={<LineChartCursor />} content={<LineTooltip />} />
          <Legend
            formatter={legendFormatter}
            align="left"
            verticalAlign="top"
            iconSize={0}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={<LineChartActiveDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

export default SessionsTime
