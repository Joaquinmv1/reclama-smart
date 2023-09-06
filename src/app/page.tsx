import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";
import { dataClients } from "@/assets/constants/constants";
import Privacity from "./components/Policy&Privacity/Privacity";
import TermsAndConditions from "./components/Terms&Conditions/Terms&Conditions";
import './globals.css';

export default function Home() {
  return (
    <main>
      <FrontPage />
      <FeacturedService />
      <BusinessInsight />
      <Cases data={dataClients}/>
      <OurAlliances />
      <FrequentQuestions />
    </main>
  )
}
