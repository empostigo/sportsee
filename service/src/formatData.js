const formatCalories = value => {
  const strValue = (value / 1000).toString().split(".")
  strValue[1] = strValue[1].padEnd(3, "0")
  return strValue.join(",")
}

const mapping = {
  id: "userId",
  todayScore: "score",
  calorieCount: [
    { firstField: "kind", value: "calories" },
    {
      secondField: "value",
      value: value => formatCalories(value)
    },
    { thirdField: "unit", value: "kCal" }
  ]
}
