import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";

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
