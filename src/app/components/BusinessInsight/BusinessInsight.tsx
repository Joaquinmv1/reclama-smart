import { businessInfo } from "@/assets/constants/constants";
import Image from "next/image";
import { BusinessInsightCard } from ".";
import lineaDeProgresoHorizontal from '../../../assets/images/lineaHorizontal.svg';
import style from './BusinessInsight.module.css';

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
          <ul className={style['card-business']}>
            {businessInfo.map((card, i) => {
              return <BusinessInsightCard key={card.title} card={card} index={i + 1} />
            })}
          </ul>
        </article>
      </section>
    </>
  )
}

export default BusinessInsight;