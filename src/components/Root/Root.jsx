// Components
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import ActivityBar from "../ActivityBar/ActivityBar"
import Footer from "../Footer/Footer"

// Style
import rootStyle from "./Root.module.scss"

const Root = ({ data }) => {
  const { activity } = data[0]
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
          <div>
            <ActivityBar data={activity} />
            <div></div>
          </div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Root
