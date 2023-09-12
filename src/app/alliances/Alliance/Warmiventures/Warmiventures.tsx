import Image from "next/image"
import { DateAlliance, TitleAlliance } from "../../components"
import style from './Warmiventures.module.css';
import warmiventuresImg from '../../../../assets/images/alliancesView/WARNI-Sin fondo 2.jpg';

function Warmiventures() {
  return (
    <>
      <section className={style.containerWarmi}>
        <div className={style.allianceData}>
          <TitleAlliance title="WARMI VENTURESWARMI VENTURES" />
          <DateAlliance date="02/06/2023" about="Participación" />
          <Image className={style.img} src={warmiventuresImg} alt="Warmi ventures Image" />
          <div className={style.warmiContent}>
            <article>Participar en el Programa de Preincubación {"Emprendamos Junt@s"} ha sido una experiencia extraordinaria para nosotros. El proceso de dar vida a una nueva empresa fue largo y desafiante, pero por primera vez, tuvimos la oportunidad de presentarnos ante una audiencia tan amplia. Queremos expresar nuestro sincero agradecimiento al equipo de Warm Ventures por brindarnos esta increíble oportunidad.</article>
            <article>Durante siete semanas intensivas, hemos acumulado una cantidad significativa de conocimiento. Cada consejo y sugerencia que recibimos del equipo de Warm Ventures ha sido inmensamente valioso en nuestro viaje como emprendedores. Estamos convencidos de que la determinación y la fortaleza que hemos demostrado serán valores fundamentales en nuestro crecimiento y desarrollo.</article>
            <article>Queremos compartir nuestro compromiso constante de seguir aprendiendo y mejorando, y también queremos destacar que obtuvimos el segundo lugar en el pitch del 2 de junio. Este logro es un testimonio de nuestra dedicación y esfuerzo como emprendedores. Seguiremos avanzando con entusiasmo para construir un futuro exitoso para nuestra empresa. ¡Gracias a todos por ser parte de este emocionante viaje!.</article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Warmiventures;