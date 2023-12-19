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

const ActivityBar = ({ data }) => {
  const xAxisValues = () => data.map(activity => data.indexOf(activity) + 1)

  return (
    <BarChart width={730} height={250} data={data}>
      <XAxis dataKey={xAxisValues} padding={{ left: 20, right: 20 }} />
      <YAxis
        yAxisId="kg"
        dataKey="kilogram"
        type="number"
        domain={["dataMin - 10", "dataMax + 10"]}
        orientation="right"
      />
      <YAxis yAxisId="cal" dataKey="calories" hide={true} />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="kilogram"
        barSize={7}
        fill="#282d30"
        yAxisId="kg"
        shape={<BarShape />}
      />
      <Bar
        dataKey="calories"
        barSize={7}
        fill="#e60000"
        yAxisId="cal"
        shape={<BarShape />}
      />
    </BarChart>
  )
}

export default ActivityBar
