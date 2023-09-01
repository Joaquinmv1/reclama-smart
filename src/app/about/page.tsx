import { BannerAbout, Founders, Mvv, Team } from './components'
import Trajectory from './components/Trajectory/Trajectoty'

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