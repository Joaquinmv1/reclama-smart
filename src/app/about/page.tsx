import { BannerAbout, Founders, Mvv, Team } from './components'
import OurFounders from './components/OurFounders/OurFounders'
import Trajectory from './components/Trajectory/Trajectoty'


export default function About() {
  return (
    <>
      <BannerAbout />
      <Founders />
      <Mvv />
      <OurFounders/>
      <Team />
      <Trajectory />
    </>
  )
}