import Image from "next/image";
import { Date, TitleBlog } from "../../components";
import style from './CybercrimeScams.module.css';
import programmer from '../../../../assets/images/blog/hacker.jpg';
import Link from "next/link";

function CybercrimeScams() {
  return (
    <>
      <section className={style.containerCybercrimeScams}>
        <div className={style.blogData}>
          <TitleBlog>
            <h3>Estafas a usuarios: ciberdelitos y robos de datos</h3>
          </TitleBlog>
          <Date date="06/09/2023" />
          <Image className={style.img} src={programmer} alt="CybercrimeScams Image" />
          <article className={style.containerComercy}>
            <p>El 24 de agosto de 2023, {"El Comercio"} informó de que Operadoras trasladan líneas móviles sin el consentimiento de los usuarios, se registraron 1.775 reclamos realizados por los usuarios ante las empresas operadoras por temas de portabilidad en el servicio móvil y de este total, el 81.86 % (1.453) correspondieron a reclamos presentados ante la empresa Movistar.</p>
            <p>En el artículo se cuenta la historia de Paola Acosta, que se despertó por la mañana sin imaginar lo que sucedió durante la madrugada: “Al utilizar su celular, se dio con la sorpresa de que no tenía servicio. La razón: movieron su línea móvil de Claro a Movistar sin su consentimiento. El malestar no acabó ahí, ya que también se percató de que sufrió la pérdida de USD 10.000 de su cuenta de ahorros.”.</p>
            <p>Este tipo de delitos cibernéticos ocurren continuamente en Perú. Los ciudadanos pueden denunciar estos delitos en cualquier comisaría del país, así como directamente en la División de Investigación de Delitos de Alta Tecnología al número 942 440 729 o al correo<br/><span style={{fontSize:"12px", color:"#374F42"}}>divindat.servicioguardia@policia.gob.pe</span></p>
            <p>Claramente el problema de Paola Acosta se deriva principalmente del hecho de que la empresa no protege los datos personales de sus clientes. Los ciudadanos no pueden protegerse contra este tipo de acciones, ya que los ataques proceden de las propias empresas.</p>
            <p>Tenemos varios clientes que han sido objeto de este tipo de {"ataques internos"}. En el caso de un cliente de nosotros, un empleado del banco la llamó utilizando el número oficial del propio banco y su acceso a la información y pidió datos personales para retirar miles de dólares. Es difícil probar estos robos de datos; la falta de información va en detrimento del consumidor.</p>
            <p>¿Ha experimentado algo similar? <span className={style.span}>reclama</span> <span>smart</span> con nosotros ¡Sólo nos tendrás que pagar si es que recuperamos tu plata!</p>
          </article>
          <article className={style.fontsWeb}>
            <p>fuente: <br />
              <Link
                className={style.link} 
                href={' https://elcomercio.pe/lima/operadoras-trasladan-lineas-moviles-sin-el-consentimiento-de-los-usuarios-casos-suman-mas-de-10-millones-en-multas-noticia/?ref=ecr&fbclid=IwAR1nYmv-p23NsLeeueQpbdBxlCayRuh780I8UucdC2t_Q2fK3SeMUHnMG6c#google_vignette'}>
                bit.ly/3EEZ7ql
              </Link>
            </p>
            <p>fuente:<br />
              <Link
              className={style.link} 
              href={' https://www.gob.pe/institucion/minjus/noticias/652966-minjusdh-presenta-estudio-sobre-ciberdelitos-en-el-pais-y-propone-recomendaciones-a-la-ciudadania'}>
              bit.ly/48jF1Q0</Link>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default CybercrimeScams;