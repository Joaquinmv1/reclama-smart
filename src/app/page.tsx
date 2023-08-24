import { FeacturedService, FrequentQuestions, FrontPage } from "./components";
import { Cases } from "./components/Cases";

export default function Home() {
  return (
    <>
      <FrontPage />
      <FeacturedService />
      <Cases/>
      <FrequentQuestions />
    </>
  )
}
