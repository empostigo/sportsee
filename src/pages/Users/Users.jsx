//React Router
import { Link } from "react-router-dom"

// Style
import usersStyle from "./Users.module.scss"

const Users = () => {
  return (
    <main className={usersStyle.main}>
      <section>
        <article className={usersStyle.user}>
          <Link className={usersStyle.link} to="/user/12">
            Karl Dovineau
          </Link>
        </article>
      </section>
    </main>
  )
}

export default Users
