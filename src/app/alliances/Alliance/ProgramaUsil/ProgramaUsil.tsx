import Image from "next/image";
import { DateAlliance, TitleAlliance } from "../../components";
import style from './ProgramaUsil.module.css';
import ProgramaUsilImg from '../../../../assets/images/alliancesView/cliente-reclamsmart1 1.jpg';

function ProgramaUsil() {
  return (
    <>
      <section className={style.containerUsil}>
        <div className={style.allianceData}>
          <TitleAlliance title="El Cliente (un programa que está hecho por USIL)" />
          <DateAlliance date="22/07/2023" about="Entrevista" />
          <Image className={style.img} src={ProgramaUsilImg} alt="Programa Usil Image" />
          <div className={style.usilContent}>
            <article>Agradecemos la oportunidad de poder presentar nuestra empresa en el programa de televisión {"El Cliente"} de Canal N, un Programa Empresarial que pone al cliente como centro de las estrategias de negocio y en el corazón de las empresas. Conversamos con Marco Antonio Merino Montani sobre nuestra empresa y nuestro propósito.</article>
            <article>Nuestra empresa nació a partir de la observación de reclamos recurrentes que a menudo quedan sin respuesta o resolución, lo que se traduce en dinero que nuestros clientes normalmente darían por perdido. Nuestra misión es abordar estos reclamos de manera directa y personalizada, utilizando un lenguaje sencillo y accesible a través de WhatsApp, para establecer un verdadero diálogo de {"tú a tú"}. Acompañamos a nuestros clientes en todo el proceso, desde la conciliación hasta la denuncia, asegurándonos de que sus derechos sean protegidos.</article>
            <article>El primer paso es tratar de conciliar con la empresa y evitar un trámite legal a favor del cliente. Hay varias empresas que tienen bien activa su parte de atención al cliente y de prácticas corporativas. Pero hay otras que usan ese proceso de conciliación para dilatar todo. Ayudamos a nuestros clientes para evitar que ellos sean confundidos.</article>
            <article>Nuestra tarifa de éxito significa “Solo ganamos, si tú ganas”. No tienes que adelantar ni un sol. Nosotros anticipamos todos los costos, incluyendo las tasas administrativas.</article>
            <article>Aquí puede ver las declaraciones más importantes; el vídeo completo (Min. 26:56 - 37:48) puede verse aquí.</article>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgramaUsil;