// Components
import ActivityBar from "../ActivityBar/ActivityBar"
import SessionsTime from "../SessionsTime/SessionsTime"
import PerformanceRadar from "../PerformanceRadar/PerformanceRadar"
import Capsule from "../Capsule/Capsule"
import Score from "../Score/Score"

// Assets
import calories from "../../assets/data-icons/calories-icon.svg"
import proteins from "../../assets/data-icons/protein-icon.svg"
import carbs from "../../assets/data-icons/carbs-icon.svg"
import lipids from "../../assets/data-icons/fat-icon.svg"

// Style
import mainStyle from "./Main.module.scss"

const Main = ({ data }) => {
  const { userInfos, activity, sessions, performance, score, keyData } = data
  const iconsArray = [calories, proteins, carbs, lipids]

  return (
    <main className={mainStyle.main}>
      <section className={mainStyle.userInfos}>
        <h1 className={mainStyle.h1}>
          bonjour{" "}
          <span className={mainStyle.userName}>{`${userInfos.firstName}`}</span>
        </h1>
        <p className={mainStyle.congrats}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </section>
      <section className={mainStyle.chartWrapper}>
        <div className={mainStyle.charts}>
          <ActivityBar data={activity} />
          <div className={mainStyle.smallCharts}>
            <SessionsTime data={sessions} />
            <PerformanceRadar data={performance} />
            <Score data={score} />
          </div>
        </div>
        <div className={mainStyle.capsules}>
          {keyData.map((item, index) => (
            <Capsule
              key={`item-${index}`}
              icon={iconsArray[index]}
              data={item}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main
