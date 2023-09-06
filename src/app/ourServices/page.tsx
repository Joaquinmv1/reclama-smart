import { Cases } from "../components"
import { Benefits } from "./components"
import BannerServices from "./components/BannerServices/BannerServices"
import SuccessRate from "./components/SuccessRate/SuccessRate"
import { dataClients } from "@/assets/constants/constants"

function OurServices() {
  return (
    <>
      <BannerServices/>
      <Benefits />
      <SuccessRate />
      <Cases data={dataClients}/>
    </>
  )
}
export default OurServices