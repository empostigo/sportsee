// Recharts
import { Rectangle } from "recharts"

// Props type checking
import PropTypes from "prop-types"

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

LineChartCursor.propTypes = {
  points: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number
}

export default LineChartCursor
