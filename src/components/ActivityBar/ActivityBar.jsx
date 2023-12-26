// Recharts
import {
  BarChart,
  CartesianGrid,
  CartesianAxis,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Legend
} from "recharts"

// Components
import BarShape from "../BarShape/BarShape"
import CustomTooltip from "../CustomTooltip/CustomTooltip"

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
      <span
        className={activityStyle.legend}
      >{`${labels[index]}${values[index]})`}</span>
    )
  }

  return (
    <article className={activityStyle.article}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="4" />
          <XAxis
            dataKey={xAxisValues}
            tickLine={false}
            tickMargin={16}
            axisLine={false}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kg"
            type="number"
            orientation="right"
            tickLine={false}
            tickCount={3}
            axisLine={false}
          />
          <YAxis yAxisId="cal" dataKey="cal" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            formatter={renderLegend}
            margin={{ top: 100, left: 0, right: 0, bottom: 100 }}
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
