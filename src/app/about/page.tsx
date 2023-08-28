import style from './about.module.css'
import { BannerAbout, Founders, Mvv, Team } from './components'

export default function About() {
  return (
    <main className={style.aboutContainer}>
      <BannerAbout />
      <Founders />
      <Mvv />
      <Team />
    </main>
  )
}