// Components
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import ActivityBar from "../ActivityBar/ActivityBar"
import SessionsTime from "../SessionsTime/SessionsTime"
import PerformanceRadar from "../PerformanceRadar/PerformanceRadar"
import Capsule from "../Capsule/Capsule"
import Score from "../Score/Score"
import Footer from "../Footer/Footer"

// Assets
import calories from "../../assets/data-icons/calories-icon.svg"
import proteins from "../../assets/data-icons/protein-icon.svg"
import carbs from "../../assets/data-icons/carbs-icon.svg"
import lipids from "../../assets/data-icons/fat-icon.svg"

// Style
import rootStyle from "./Root.module.scss"

const Root = ({ data }) => {
  const { activity, sessionsTiming, performance, score, keyData } = data[0]
  const iconsArray = [calories, proteins, carbs, lipids]

  return (
    <>
      <Header />
      <main className={rootStyle.main}>
        <NavBar />
        <section className={rootStyle.userInfos}>
          <h1 className={rootStyle.h1}>
            bonjour{" "}
            <span
              className={rootStyle.userName}
            >{`${data[0].userInfos.firstName}`}</span>
          </h1>
          <p className={rootStyle.congrats}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>
        <section className={rootStyle.chartWrapper}>
          <div className={rootStyle.charts}>
            <ActivityBar data={activity} />
            <div className={rootStyle.smallCharts}>
              <SessionsTime data={sessionsTiming} />
              <PerformanceRadar data={performance} />
              <Score data={score} />
            </div>
          </div>
          <div className={rootStyle.capsules}>
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
      <Footer />
    </>
  )
}

export default Root
