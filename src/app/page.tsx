import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";
import './globals.css';

export default function Home() {
  return (
    <main>
      <FrontPage />
      <FeacturedService />
      <BusinessInsight />
      <Cases />
      <FrequentQuestions />
      <OurAlliances />
    </main>
  )
}
