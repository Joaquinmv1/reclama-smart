import { BannerAbout, Mvv, Team } from './components'
import Trajectory from './components/Trajectory/Trajectoty'
import OurFounders from './components/OurFounders/OurFounders'

export default function About() {
  return (
    <>
      <BannerAbout />
      <Mvv />
      {/* <OurFounders/> */}
      <Team />
      <Trajectory />
    </>
  )
}