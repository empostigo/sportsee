// Recharts
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Legend
} from "recharts"

// Components
import BarShape from "../BarShape/BarShape"
import BarChartTooltip from "../BarChartTooltip/BarChartTooltip"

// Style
import activityStyle from "./ActivityBar.module.scss"

const ActivityBar = ({ data }) => {
  // Transform dates to numbers
  const xAxisValues = () => data.map(activity => data.indexOf(activity) + 1)

  // Formatter for legend
  const renderLegend = (value, entry, index) => {
    const labels = ["Poids (", "Calories brûlées (k"]
    const values = [value, value.charAt(0).toUpperCase() + value.slice(1)]

    return (
      <>
        <span className={activityStyle.title}>Activité quotidienne</span>
        <span
          className={activityStyle.legend}
        >{`${labels[index]}${values[index]})`}</span>
      </>
    )
  }

  return (
    <article className={activityStyle.wrapper}>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          data={data}
          margin={{ top: 63, right: 43, bottom: 23, left: 43 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#dedede"
            strokeDasharray="4"
          />
          <XAxis
            dataKey={xAxisValues}
            tick={{ fill: "#9b9eac" }}
            tickLine={false}
            tickMargin={16}
            axisLine={{ stroke: "#dedede" }}
            padding={{ left: -50, right: -50 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kg"
            type="number"
            orientation="right"
            tick={{ fill: "#9b9eac" }}
            tickLine={false}
            tickCount={3}
            tickMargin={43}
            axisLine={false}
          />
          <YAxis yAxisId="cal" dataKey="cal" hide={true} />
          <Tooltip content={<BarChartTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            formatter={renderLegend}
            wrapperStyle={{ top: 0 }}
          />
          <Bar
            dataKey="kg"
            barSize={7}
            fill="#282d30"
            yAxisId="kg"
            shape={<BarShape />}
            activeBar={<BarShape />}
          />
          <Bar
            dataKey="cal"
            barSize={7}
            fill="#e60000"
            yAxisId="cal"
            shape={<BarShape />}
            activeBar={<BarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

export default ActivityBar
