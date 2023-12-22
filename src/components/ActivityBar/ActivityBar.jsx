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
  ResponsiveContainer
} from "recharts"

// Components
import BarShape from "../BarShape/BarShape"
import CustomTooltip from "../CustomTooltip/CustomTooltip"

// Style
import activityStyle from "./ActivityBar.module.scss"

const ActivityBar = ({ data }) => {
  const xAxisValues = () => data.map(activity => data.indexOf(activity) + 1)

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
