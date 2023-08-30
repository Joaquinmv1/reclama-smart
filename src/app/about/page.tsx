import style from './about.module.css'
import { BannerAbout, Founders, Mvv, Team } from './components'
import OurFounders from './components/OurFounders/OurFounders'

export default function About() {
  return (
    <main className={style.aboutContainer}>
      <BannerAbout />
      <Founders />
      <Mvv />
      <OurFounders/>
      <Team />
    </main>
  )
}