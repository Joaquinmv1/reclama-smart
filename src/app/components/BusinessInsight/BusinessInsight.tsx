import Image from "next/image";
import lineaDeProgreso from '../../../assets/images/Linea de progreso.svg';
import style from './BusinessInsight.module.css';
import { businessInfo } from "@/assets/constants/constants";
import { BusinessInsightCard } from ".";

function BusinessInsight() {
  return (
    <>
      <section className={style['section-containerBusiness']}>
        <article className={style.businessInfo}>
          <h2>Así funciona</h2>
          <p>Aquí te explicamos los pasos a seguir</p>
        </article>
        <Image
          src={lineaDeProgreso}
          className={style.businessImg}
          alt="steps"
        />
        <ul className={style['card-business']}>
          {businessInfo.map((card) => {
            return <BusinessInsightCard key={card.title} card={card} />
          })}
        </ul>
      </section>
    </>
  )
}
export default BusinessInsight;