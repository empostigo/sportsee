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

const userInfosMapping = {
  id: "userId",
  todayScore: { newName: "score", setValue: value => formatScore(value) },
  keyData: {
    setValue: object => formatKeyData(object)
  }
}

const mappingUserInfos = object => {
  const result = {}
  for (const key in object) {
    if (userInfosMapping.hasOwnProperty(key)) {
      const mappingKey = userInfosMapping[key]
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

const replaceSessionsKeys = sessionsArray =>
  sessionsArray.map(object => {
    const result = {}
    for (const key in object) {
      let newKey = ""
      switch (key) {
        case "day":
          result[key] = object[key]
          break

        case "kilogram":
          newKey = "kg"
          result[newKey] = object[key]
          break

        case "calories":
          newKey = "cal"
          result[newKey] = object[key]
          break
      }
    }

    return result
  })

const userActivityMapping = {
  sessions: {
    setValue: sessionsArray => replaceSessionsKeys(sessionsArray)
  }
}

const mappingUserActivity = object => {
  const result = {}
  for (const key in object) {
    if (userActivityMapping.hasOwnProperty(key)) {
      result[key] = userActivityMapping[key].setValue(object[key])
    } else {
      result[key] = object[key]
    }
  }

  return result
}

module.exports = { mappingUserInfos, mappingUserActivity }
