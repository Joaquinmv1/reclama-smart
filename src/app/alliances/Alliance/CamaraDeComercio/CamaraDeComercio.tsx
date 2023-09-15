import Image from "next/image";
import { DateAlliance, TitleAlliance } from "../../components";
import style from './CamaraDeComercio.module.css';
import camaraDeComercioimg from '../../../../assets/images/blog/camaraDeComercio.jpg';
import Link from "next/link";

function CamaraDeComercio() {
  return (
    <>
      <section className={style.containerCamara}>
        <div className={style.allianceData}>
            <TitleAlliance title="Cámara de Comercio e Industria Peruano-Alemana" />
          <div className={style.dateAbout}>
            <DateAlliance date="08/08/2023" about="Webinar “Introducción al derecho del consumidor para Empresarios”" />
          </div>
          <Image className={style.img} src={camaraDeComercioimg} alt="Camara de comercio Image" />
          <div className={style.camaraContent}>
            <article>En este webinar, dictado por Mariana Silva Santisteban, nuestra co-fundadora, los participantes adquirieron conocimientos fundamentales sobre los derechos del consumidor. Esto no solo les permitirá proteger sus negocios, sino también garantizar los derechos de sus clientes, abordar reclamos de manera efectiva y aplicar buenas prácticas corporativas. Queremos expresar nuestro sincero agradecimiento a la Cámara de Comercio Alemana para el Perú por brindarnos esta valiosa oportunidad de compartir información crucial.</article>
            <article>Es esencial no solo orientar a las empresas sobre cómo cumplir con las leyes de protección al consumidor, sino también empoderarlas para que puedan ejercer sus derechos como consumidores o presentar quejas ante entidades como Indecopi. Hemos detallado este proceso en una entrada de nuestro blog, que te invitamos a revisar.</article>
            <article>Durante el webinar, recibimos numerosas preguntas por parte de los participantes, las cuales respondimos con gusto. Estaremos encantados de mantenerlos informados sobre futuras charlas y eventos con la AHK (Cámara de Comercio Alemana para el Perú).</article>
            <article>Si desean ver el webinar o compartirlo con otros interesados, pueden encontrarlo en la página web de la AHK a través del siguiente enlace: <Link className={style.link} href={'https://peru.ahk.de/es/reviva-nuestros-eventos/ley-del-teletrabajo-y-los-cambios-de-esta-nueva-normativa-1'} target="_blank">https://peru.ahk.de/es/reviva-nuestros-eventos/ley-del-teletrabajo-y-los-cambios-de-esta-nueva-normativa-1</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default CamaraDeComercio;