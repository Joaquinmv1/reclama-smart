
import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";
import Team from "./components/Team/Team";


export default function Home() {
  return (
    <>
      <FrontPage />
      <FeacturedService />
      <BusinessInsight />
      <Cases />
      <FrequentQuestions />
      <OurAlliances />
    </>
  )
}
