import style from './about.module.css'
import { BannerAbout, Mvv, Team } from './components'

export default function About() {
  return (
    <main className={style.aboutContainer}>
      <BannerAbout />
      <Mvv />
      <Team />
    </main>
  )
}