import {
  BusinessInsight,
  Cases,
  FeacturedService,
  FrequentQuestions,
  FrontPage,
  OurAlliances
} from "./components";

export default function Home() {
  return (
    <>
      <main>
        <FrontPage />
        <FeacturedService />
        <BusinessInsight />
        <Cases />
        <FrequentQuestions />
        <OurAlliances />
      </main>
    </>
  )
}
