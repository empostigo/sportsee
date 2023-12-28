// Components
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import ActivityBar from "../ActivityBar/ActivityBar"
import SessionsTime from "../SessionsTime/SessionsTime"
import Footer from "../Footer/Footer"

// Style
import rootStyle from "./Root.module.scss"
import PerformanceRadar from "../PerformanceRadar/PerformanceRadar"

const Root = ({ data }) => {
  const { activity, sessionsTiming, performance } = data[0]
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
        <section>
          <div className={rootStyle.charts}>
            <ActivityBar data={activity} />
            <div className={rootStyle.smallCharts}>
              <SessionsTime data={sessionsTiming} />
              <PerformanceRadar data={performance} />
            </div>
          </div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Root
