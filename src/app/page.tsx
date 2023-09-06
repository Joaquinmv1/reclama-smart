import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";
import { dataClients } from "@/assets/constants/constants";
import Privacity from "./Policy&Privacity/Privacity";
import TermsAndConditions from "./terms/page";
import './globals.css';

export default function Home() {
  return (
    <main>
      <FrontPage />
      <FeacturedService />
      <BusinessInsight />
      <FrequentQuestions />
      <OurAlliances />
      <Cases data={dataClients} />
      <OurAlliances />
      <FrequentQuestions />
    </main>
  )
}
