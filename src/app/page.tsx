/* import Image from 'next/image';
import vector from './../assets/images/OBJECTS (1).svg'
import vector2 from './../assets/images/OBJECTS (2).svg' */
import { BusinessInsight, FeacturedService, FrequentQuestions, FrontPage, OurAlliances } from "./components";
import { Cases } from "./components/Cases";
import './globals.css';

export default function Home() {
  return (
    <main>
{/*       <div className='vector2'><Image className='imgVector2' alt='vector2' src={vector2} /></div>
      <div className='vector'><Image className='imgVector' alt='vector' src={vector} /></div> */}
      <FrontPage />
      <FeacturedService />
      <BusinessInsight />
      <Cases />
      <FrequentQuestions />
      <OurAlliances />
    </main>
  )
}
