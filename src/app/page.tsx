import { BusinessInsight, Cases, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { dataClients } from "@/assets/constants/constants";
import './globals.css';

export default function Home() {
  return (
    <main>
      <FrontPage />
      <FeacturedService />
     {/*  <BusinessInsight />
      <Cases data={dataClients} />
      <OurAlliances />
      <FrequentQuestions /> */}
    </main>
  )
}