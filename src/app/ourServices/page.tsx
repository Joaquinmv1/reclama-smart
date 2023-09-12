import { Cases } from "../components"
import { Benefits } from "./components"
import SuccessRatesService from "./components/successRates/SuccessRatesService"
import BannerServices from "./components/BannerServices/BannerServices"
import { dataClients } from "@/assets/constants/constants"
import Rates from "./components/Rates/Rates"

function OurServices() {
  return (
    <>
      <BannerServices />
      <Benefits />
      {/* <SuccessRatesService/> */}
      <Rates />
      <Cases data={dataClients} />
    </>
  )
}
export default OurServices