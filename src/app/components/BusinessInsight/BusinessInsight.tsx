import Image from "next/image";
import lineaDeProgresoHorizontal from '../../../assets/images/lineaHorizontal.svg';
import lineaDeProgresoVertical from '../../../assets/images/lineaVertical.png';
import style from './BusinessInsight.module.css';
import { businessInfo } from "@/assets/constants/constants";
import { BusinessInsightCard } from ".";

function BusinessInsight() {
  return (
    <>
      <section className={style['section-containerBusiness']}>
        <article className={style.businessInfo}>
          <h2>Así funciona</h2>
          <p>Reclama sin complicaciones, nosotros nos encargamos de todo y te mantenemos informado en cada paso</p>
        </article>
        <Image
          src={lineaDeProgresoHorizontal}
          className={style.businessImg}
          alt="steps horizontal"
        />
        <article className={style.containerSteps}>
          <Image
            src={lineaDeProgresoVertical}
            className={style.businessImgVertical}
            alt="steps vertical"
          />
          <ul className={style['card-business']}>
            {businessInfo.map((card) => {
              return <BusinessInsightCard key={card.title} card={card} />
            })}
          </ul>
        </article>
      </section>
    </>
  )
}

export default BusinessInsight;