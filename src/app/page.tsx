import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";
import { dataClients } from "@/assets/constants/constants";
import './globals.css';

export default function Home() {
  return (
    <main>
      <FrontPage />
      <FeacturedService />
      <BusinessInsight />
      <Cases data={dataClients}/>
      <FrequentQuestions />
      <OurAlliances />
    </main>
  )
}
