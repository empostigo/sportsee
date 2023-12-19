import barshapeStyle from "./BarShape.module.scss"

const getPath = (x, y, width, height) => {
  return `M${x},${y}
          h${width} v${height} h${-width} v${-height}
          A ${width / 2} ${width / 2} 0 1 1 ${x + width} ${y}`
}

const BarShape = props => {
  const { x, y, width, height, fill } = props

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
}

export default BarShape
