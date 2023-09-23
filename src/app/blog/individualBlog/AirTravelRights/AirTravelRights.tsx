import Image from 'next/image';
import { Date, TitleBlog } from '../../components';
import style from './AirTravelRights.module.css';
import airTravelImg from '../../../../assets/images/blog/vista-posterior-hombre-maleta 1.jpg';
import Link from 'next/link';

function AirTravelRights() {
  return (
    <>
      <section className={style.containerAirTravel}>
        <div className={style.blogData}>
          <TitleBlog>
            <h3>3 derechos fundamentales cuando viajes en avión</h3>
          </TitleBlog>
          <Date date='05/07/2023' />
          <Image className={style.img} src={airTravelImg} alt='AirTravel Rights Image' />
          <article className={style.travelText1}>
            <p>Fin de semana largo. Piensas que es el momento ideal para escapar de la rutina y hacer ese viaje perfecto con el que estabas soñando desde hace tiempo. Sin embargo, hemos visto muchos casos, en los que los derechos de los consumidores fueron violados. Entendemos tu frustración y te contamos 3 derechos fundamentales que tienes como pasajero aéreo.</p>
            <p>Para el contexto es importante saber que las normas que aplican para las aerolíneas provienen de la Decisión 619 CAN (Comunidad Andina de Naciones) del 2005, que establecen los Derechos y Obligaciones de los Usuarios y Operadores de los Servicios de Transporte Aéreo en la comunidad Andina (en este contexto véase nuestro compromiso <Link className={style.link} href={'/blog/blogContent?blog=consumer-rights'}>aquí</Link> ).</p>
          </article>
          <article className={style.stepsAirTravel}>
            <div className={style.stepAirTravel}>
              <h3>1. Derecho a la información sobre cualquier cambio en tu vuelo</h3>
              <p>La Ley de Aeronáutica Civil (Ley N° 27261), en su artículo 78.1 no establece claramente como obligación de los proveedores hacer mención expresa de las condiciones del servicio al momento de la venta o en publicidad que difunda. </p>
              <p>Pero en la Decisión N° 619 de la Comunidad Andina se establece en su artículo 4, que el consumidor tiene derecho a acceder a distinta información relevante del transportista aéreo, como el operador turístico o el agente de viajes. Por ejemplo antes de la ejecución del transporte: cualquier cambio en el vuelo, el itinerario y, en general, cualquier aspecto que afecte tu reserva acordada, por el medio más rápido posible (teléfono, fax, correo electrónico, etc.) y, por lo menos, con cuatro (4) horas de antelación al vuelo.</p>
            </div>
            <div className={style.stepAirTravel}>
              <h3>2. Derecho a la información sobre tus derechos en escrito</h3>
              <p>Además, en caso de denegación de embarque por sobreventa, cancelación o retraso, los proveedores necesitan informarte en la forma más idónea posible, de preferencia escrita, sobre tus derechos en materia de compensación y asistencia.   </p>
              <p>En este sentido lo ha señalado también la Sala Especializada en Protección al Consumidor de Indecopi en su decisión, que los proveedores deben informarte sobre todas las circunstancias que incidan directamente en la prestación del servicio. Según ella, estas condiciones deben ser puestas en conocimiento del pasajero de “una manera clara, oportuna y accesible”.</p>
              <p>Indecopi puede sancionar a los proveedores por la comisión de una infracción al deber de información, tipificado en el artículo 2 del Código de Protección y Defensa del Consumidor (Ley N° 29571) en tanto no habría brindado información clara y oportuna sobre las condiciones de los billetes aéreos. Ya hemos ganado casos al respecto.</p>
            </div>
            <div className={style.stepAirTravel}>
              <h3>3. Derecho a una compensación</h3>
              <p>Si sale algo mal, la Decisión N° 619 de la Comunidad Andina establece en su artículo 8 el derecho a compensación en los casos de cancelaciones, interrupciones o demoras en que no haya tenido lugar el reembolso, o ante cualquier otro evento que sea imputable al transportista aéreo, así como en los de sobreventa de cupos, se procurará el transporte alternativo y, de no ser posible.</p>
            </div>
            <p className={style.textStepAirTravel}>¿Tienes problemas con tu viaje porque se canceló, se retrasó o hubo overbooking? </p>
            <p className={style.textStepAirTravel}><span className={style.reclama}>reclama</span>  <span>smart</span> con nosotros ¡Sólo nos tendrás que pagar si es que recuperamos tu plata!</p>
          </article>
          <article className={style.articlesAirTravel}>
            <p>Artículo 78 - Del transporte aéreo, transporte aéreo especial y el trabajo aéreo 78.1 Se considera servicio de transporte aéreo a la serie de actos destinados a trasladar por vía aérea a personas o cosas, de un punto de partida a otro de destino a cambio de una contraprestación, salvo las condiciones particulares del transporte aéreo especial y el trabajo aéreo.78.2 Se considera servicio de transporte aéreo especial al empleo de una aeronave para el traslado de personas o cosas con fines específicos, bajo diferentes formas y modalidades, a cambio de una contraprestación. 78.3 El concepto de trabajo aéreo alude al empleo de una aeronave directamente como herramienta de trabajo para una o más labores específicas a cambio de una contraprestación (Ley N° 27261).</p>
            <p>Artículo 4 - (...) Antes de la ejecución del transporte: g) Cualquier cambio en el vuelo, el itinerario y, en general, cualquier aspecto que afecte la reserva acordada, por el medio más rápido posible (teléfono, fax, correo electrónico, etc.) y, por lo menos, con cuatro horas de antelación al vuelo (Decisión N° 619 de la Comunidad Andina).
            </p>
            <p>Artículo 4 - (...) Antes de la ejecución del transporte: h) En caso de denegación de embarque por sobreventa, cancelación o retraso, información en la forma más idónea posible, de preferencia escrita, sobre los derechos que le asisten especialmente en materia de compensación y asistencia; (Decisión N° 619 de la Comunidad Andina).</p>
            <p>Resolución N° 2813-2010/SC2-INDECOPI.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default AirTravelRights;