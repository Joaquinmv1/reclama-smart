import style from './about.module.css'
import Founders from './components/Founders/Founders'
import { BannerAbout, Mvv, Team } from './components'

export default function About() {
  return (
    <main className={style.aboutContainer}>
      <BannerAbout />
      <Founders/>
      <Mvv />
      <Team />
    </main>
  )
}