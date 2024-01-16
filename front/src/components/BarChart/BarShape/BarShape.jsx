// Props type checking
import PropTypes from "prop-types"

const getPath = (x, y, width, height) => {
  const arcRadius = width / 2
  const barHeight = height - width / 2
  return `M${x},${y + arcRadius}
          h${width} v${barHeight} h${-width} v${-barHeight}
          A ${arcRadius} ${arcRadius} 0 1 1 ${x + width} ${y + arcRadius}`
}

const BarShape = props => {
  const { x, y, width, height, fill } = props

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
}

BarShape.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export default BarShape
