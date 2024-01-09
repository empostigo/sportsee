const formatScore = score => score * 100

const formatCalories = value => {
  const strValue = (value / 1000).toString().split(".")
  strValue[1] = strValue[1].padEnd(3, "0")
  return strValue.join(",")
}

const formatKeyData = keyDataObject => {
  const result = []
  for (const key in keyDataObject) {
    let object = {}
    switch (key) {
      case "calorieCount":
        object = {
          kind: "calories",
          value: formatCalories(keyDataObject[key]),
          unit: "kCal"
        }
        break

      case "proteinCount":
        object = {
          kind: "protéines",
          value: keyDataObject[key],
          unit: "g"
        }
        break

      case "carbohydrateCount":
        object = {
          kind: "glucides",
          value: keyDataObject[key],
          unit: "g"
        }
        break

      case "lipidCount":
        object = {
          kind: "lipides",
          value: keyDataObject[key],
          unit: "g"
        }
        break

      default:
        break
    }
    result.push(object)
  }

  return result
}

const mapping = {
  id: "userId",
  todayScore: { newName: "score", setValue: value => formatScore(value) },
  keyData: {
    setValue: object => formatKeyData(object)
  }
}

const mappingUserInfos = object => {
  const result = {}
  for (const key in object) {
    if (mapping.hasOwnProperty(key)) {
      const mappingKey = mapping[key]
      const isValueObject = typeof mappingKey === "object"
      const newKey = isValueObject
        ? "newName" in mappingKey
          ? mappingKey.newName
          : key
        : mappingKey
      result[newKey] = isValueObject
        ? "setValue" in mappingKey
          ? mappingKey.setValue(object[key])
          : object[key]
        : object[key]
    } else {
      result[key] = object[key]
    }
  }

  return result
}

module.exports = mappingUserInfos
