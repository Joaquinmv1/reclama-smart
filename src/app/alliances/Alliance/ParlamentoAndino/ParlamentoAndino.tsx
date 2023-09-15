import Image from "next/image";
import { DateAlliance, TitleAlliance } from "../../components";
import style from './ParlamentoAndino.module.css';
import ParlamentoAndinoImg from '../../../../assets/images/alliancesView/parlamento reclamasmart1 2.jpg';
import Link from "next/link";

function ParlamentoAndino() {
  return (
    <>
      <section className={style.containerParlamento}>
        <div className={style.allianceData}>
          <TitleAlliance title="Parlamento Andino" />
          <DateAlliance date="27/06/2023" about="Conferencista" />
          <Image className={style.img} src={ParlamentoAndinoImg} alt="Parlamento Andino Image" />
          <div className={style.ParlamentoArticle}>
            <article>Nuestro CEO, Eluisa Helbig-Marchena, participó como conferencista en el “Primer Congreso Mundial de Derecho al Olvido Digital”, el cual se llevó a cabo el 27 y 28 de junio del 2023 en la ciudad de Lima, el mismo que fue organizado por la Comisión Quinta de Derechos Humanos, Desarrollo Social y Participación Ciudadana del Parlamento Andino.</article>
            <article>El Parlamento Andino, en su búsqueda de armonización regional y promoción de la cooperación entre los países andinos, desempeña un papel esencial en la consolidación de la democracia y el fomento del desarrollo económico y social en beneficio de los ciudadanos de la región. Como empresa de servicios digitales con una co-fundadora de origen alemán, hemos tenido la oportunidad de compartir nuestra experiencia y conocimiento sobre la regulación en Europa. La Unión Europea (UE) adoptó el Reglamento General de Protección de Datos (RGPD) en el 2016, que empezó a aplicarse en mayo de 2018, marcando un hito en la armonización y fortalecimiento de las normas de protección de datos en toda la región. </article>
            <article>En una entrada de nuestro blog, ofrecemos un ejemplo concreto de cómo el trabajo del Parlamento Andino impacta directamente en los derechos de los consumidores, específicamente en el ámbito de las relaciones con las aerolíneas, que te invitamos a revisar.</article>
            <article>Esto ilustra de manera elocuente cómo la influencia internacional puede moldear los derechos de los consumidores.</article>
            <article>Estamos profundamente agradecidos al Parlamento Andino por su invitación y la oportunidad de compartir nuestros conocimientos. Continuamos firmemente comprometidos en nuestra labor de garantizar y proteger los derechos de los consumidores en toda la región.</article>
            <article>
              <p>Enlace:</p>
              <Link className={style.link} href={'https://www.parlamentoandino.org.pe/derecho-al-olvido/'} target="_blank">bit.ly/45UtwwO</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default ParlamentoAndino;