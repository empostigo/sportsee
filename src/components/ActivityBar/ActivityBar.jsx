// Recharts
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts"

// Components
import BarShape from "../BarShape/BarShape"
import CustomTooltip from "../CustomTooltip/CustomTooltip"

const ActivityBar = ({ data }) => {
  const xAxisValues = () => data.map(activity => data.indexOf(activity) + 1)

  return (
    <BarChart width={730} height={250} data={data}>
      <XAxis dataKey={xAxisValues} />
      <YAxis
        yAxisId="kg"
        dataKey="kg"
        type="number"
        domain={["dataMin - 10", "dataMax + 10"]}
        orientation="right"
      />
      <YAxis
        yAxisId="cal"
        dataKey="cal"
        hide={true}
        domain={["dataMin - 70", "dataMax + 70"]}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
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
  )
}

export default ActivityBar