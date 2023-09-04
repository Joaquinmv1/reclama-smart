import { benefitsData } from "@/assets/constants/constants";
import Image from "next/image";
import style from './Benefits.module.css';
import Button from "@/components/Button/Button";

function Benefits() {
  return (
    <>
      <section className={style.containerBenefits}>
        <h2>¡Conoce nuestros servicios!</h2>
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
          <Button title="Consulta Gratis" className={style.buttonBeneficts} />
        </div>
      </section>
    </>
  )
}

export default Benefits;