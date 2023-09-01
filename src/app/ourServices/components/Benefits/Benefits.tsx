import { benefitsData } from "@/assets/constants/constants";
import Image from "next/image";
import style from './Benefits.module.css';

function Benefits() {
  return (
    <>
      <section className={style.containerBenefits}>
        <p>Nuestros Servicios</p>
        <h2>Te ofrecemos un conjunto completo de servicios diseñados para proteger tus derechos. Nuestro equipo de abogados experimentados esta aquí para respaldarte en una variedad de situaciones.</h2>
        <div className={style.cardBenefits}>
          <ul className={style['benefits-card-container']}>
            {benefitsData.map((card, i) => {
              return (
                <li key={`${card.image} ${i}`}>
                  <Image width={60} src={card.image} alt={`${card.title} services`} />
                  <h3>{card.title}</h3>
                  {card.benefits.map((benefit, index) => <p key={`${card.benefits} ${index}`}>✔️ {benefit}</p>)}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
export default Benefits