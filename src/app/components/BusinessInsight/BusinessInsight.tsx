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
          <h2>Así funciona reclama <span style={{ color: '#FF5220' }}>smart</span>, lo hacemos sencillo</h2>
        </article>
        <article className={style.line}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </article>
        <article className={style.containerSteps}>
          <section>
            <ul className={style['card-business']}>
              {businessInfo.map((card, i) => {
                return <BusinessInsightCard key={card.title} card={card} index={i + 1} />
              })}
            </ul>
          </section>
        </article>
      </section>
    </>
  )
}

export default BusinessInsight;