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
  userInfos: { setValue: object => object },
  todayScore: { newName: "score", setValue: value => formatScore(value) },
  keyData: {
    setValue: object => formatKeyData(object)
  }
}

const mappingFunction = object => {
  const result = {}
  for (const key in mapping) {
    const mappingKey = mapping[key]
    const isValueObject = typeof mappingKey === "object"
    const newKey = isValueObject
      ? "newName" in mappingKey
        ? mappingKey.newName
        : key
      : mappingKey
    if (object.hasOwnProperty(key)) {
      result[newKey] = isValueObject
        ? "setValue" in mappingKey
          ? mappingKey.setValue(object[key])
          : object[key]
        : object[key]
    } else {
      result[newKey] = null
    }
  }

  return result
}

/*
const testData = {
  data: {
    id: 12,
    userInfos: { firstName: "Karl", lastName: "Dovineau", age: 31 },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    }
  }
}

const result = mappingFunction(testData.data, mapping)
console.log(result)
*/

module.exports = mappingFunction
