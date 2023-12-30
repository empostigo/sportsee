// Recharts
import { Rectangle } from "recharts"

const LineChartCursor = ({ points, height, width }) => {
  const { x } = points[0]

  return (
    <Rectangle
      fill={"#000000"}
      fillOpacity="0.2"
      x={x}
      y={0}
      width={width - x}
      height={height}
    />
  )
}

export default LineChartCursor
