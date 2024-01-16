// React
import { useEffect, useRef, useState } from "react"

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
import LineChartCursor from "../LineChartCursor/LineChartCursor"

// Style
import sessionsStyle from "./SessionsTime.module.scss"

const SessionsTime = ({ data }) => {
  const wrapper = useRef(null)
  const [wrapperHeight, setWrapperHeight] = useState(undefined)
  useEffect(() => {
    const getWrapperHeight = () => {
      setWrapperHeight(wrapper.current.offsetHeight)
    }
    window.addEventListener("resize", getWrapperHeight)
    getWrapperHeight()
    return () => window.removeEventListener("resize", getWrapperHeight)
  }, [])

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

  return (
    <article className={sessionsStyle.wrapper} ref={wrapper}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data} margin={{ left: 0, right: 0 }}>
          <defs>
            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="40.32%" stopColor="#ffffff" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={xAxisValue}
            tick={{
              fill: "white",
              fontSize: "12px",
              fontWeight: 400,
              opacity: 0.504
            }}
            tickLine={false}
            axisLine={false}
            style={{ transform: "translateX(20px) scaleX(0.82)" }}
          />
          <text
            x="7%"
            y={wrapperHeight - 14}
            style={{
              fill: "white",
              fontSize: "12px",
              fontWeight: 400,
              opacity: 0.504
            }}
          >
            L
          </text>
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={["dataMin - 20", "dataMax + 20"]}
          />
          <Tooltip
            cursor={<LineChartCursor height={wrapperHeight} />}
            content={<LineTooltip />}
          />
          <Legend
            formatter={legendFormatter}
            align="left"
            verticalAlign="top"
            iconSize={0}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#lineStroke)"
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
