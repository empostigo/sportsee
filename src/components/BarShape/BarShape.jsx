import barshapeStyle from "./BarShape.module.scss"

const getPath = (x, y, width, height) => {
  const arcRadius = width / 2
  const barHeight = height - width / 2
  return `M${x},${y}
          h${width} v${barHeight} h${-width} v${-barHeight}
          A ${arcRadius} ${arcRadius} 0 1 1 ${x + width} ${y}`
}

const BarShape = props => {
  const { x, y, width, height, fill } = props

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
}

export default BarShape
