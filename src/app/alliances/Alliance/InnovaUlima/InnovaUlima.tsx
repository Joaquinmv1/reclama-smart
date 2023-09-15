import Image from "next/image";
import { DateAlliance, TitleAlliance } from "../../components";
import style from './InnovaUlima.module.css';
import innovaUlimaImg from '../../../../assets/images/alliancesView/maxresdefault 1.jpg';
import Link from "next/link";

function InnovaUlima() {
  return (
    <>
      <section className={style.containerInnovaUlima}>
        <div className={style.allianceData}>
          <TitleAlliance title="Universidad de Lima" /> 
          <DateAlliance date="06/07/2023" about="Concurso de Emprendimiento Social" />
          <Image className={style.img} src={innovaUlimaImg} alt="Innova Ulima Image" />
          <div className={style.innovaUlimaContent}>
            <article>El Concurso de Emprendimiento Social , impulsado por el Centro de Emprendimiento de la Universidad de Lima (Innova Ulima) y el Centro de Sostenibilidad (Responde Ulima), representa un paso importante en la promoción de emprendimientos sociales que son innovadores, escalables y autosostenibles, y que además están alineados con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas.</article>
            <article>Estamos emocionados por las futuras colaboraciones que tenemos planeadas junto con la universidad. Mantendremos a todos informados sobre los emocionantes proyectos que están por venir. ¡Estén atentos a las novedades que estamos preparando para ustedes!</article>
            <article className={style.containerLink}>
              <Link className={style.link} target="_blank" href={'https://www.ulima.edu.pe/departamento/centro-de-emprendimiento/concurso-de-emprendimiento-social'}>https://www.ulima.edu.pe/departamento/centro-de-emprendimiento/concurso-de-emprendimiento-social</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default InnovaUlima;