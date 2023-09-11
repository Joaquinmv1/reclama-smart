import Image from 'next/image';
import { Date, TitleBlog } from '../../components';
import style from './EntrepreneurialComplaints.module.css';
import entrepreneurialImg from '../../../../assets/images/blog/vistaFrontal.jpg';

function EntrepreneurialComplaints() {
  return (
    <>
      <section className={style.containerEntrepreneurial}>
        <div className={style.blogData}>
          <TitleBlog>
            <h3>Soy empresario, ¿puedo denunciar ante INDECOPI? </h3>
            <h4>Por Eluisa Maria Helbig-Marchena</h4>
          </TitleBlog>
          <Date date='10/08/2023' />
          <Image
            className={style.img}
            src={entrepreneurialImg}
            alt='Entrepreneurial Complaints image'
          />
          <article className={style.entrepreneurialTexts}>
            <p>Hemos visto muchos casos, en los que las empresas también se ven afectadas en sus derechos como consumidores, como al adquirir productos o servicios que no cumplen con sus expectativas (productos financieros, servicios de catering para eventos, entre otros). En nuestro rol como consultores, hemos recibido numerosas preguntas y consultas sobre cómo podemos brindar asistencia en estos casos.</p>
            <p>Recientemente, hemos llevado a cabo un Webinar en colaboración con la AHK (Cámara de Comercio e Industria Peruano-Alemana), que exploró a fondo este tema (puedes ver la grabación aquí). En nuestro próximo artículo, nos sumergiremos en los conceptos esenciales relacionados con la protección al consumidor y cómo las empresas pueden aplicar estas normativas de manera efectiva y detallada.</p>
            <p>Para que una empresa pueda acogerse a la normativa de protección al consumidor y recurrir a INDECOPI u otras autoridades competentes, es necesario verificar si cumple con los requisitos para ser considerada consumidora. </p>
          </article>
          <article className={style.listRights}>
            <h3>Según el artículo 4, inciso 5 del Código de Protección y Defensa del Consumidor (Ley Nº 29571), se considera consumidor:</h3>
            <ul>
              <li>a las personas naturales o jurídicas </li>
              <li>que adquieren, utilizan o disfrutan productos o servicios </li>
              <li>como destinatarios finales, en beneficio propio, familiar o social.</li>
              <li>actuando fuera de una actividad empresarial o profesional.</li>
            </ul>
          </article>
          <p className={style.significado}>Esto significa: No se considera consumidor a quienes adquieren, utilizan o disfrutan productos o servicios destinados normalmente para su actividad como proveedores.</p>
          <article className={`${style.listRights} ${style.margin}`}>
            <h3>Sin embargo, según el artículo 1.2 del Código de Protección y Defensa del Consumidor (Ley Nº 29571), adicionalmente de manera excepcional, el Código brinda protección a los microempresarios. Es importante tener en cuenta que, para tal efecto, deben verificarse los siguientes requisitos:</h3>
            <ul>
              <li>la calidad de microempresario del denunciante;</li>
              <li>que el bien o servicio no forme parte del giro propio del negocio;</li>
              <li>y la asimetría informativa respecto de dichos bienes o servicios.</li>
            </ul>
          </article>
          <p className={`${style.significado} ${style.border}`}>Artículo 1.2 Los microempresarios que evidencien una situación de asimetría informativa con el proveedor respecto de aquellos productos o servicios que no formen parte del giro propio del negocio. (Ley N° 27261).</p>
        </div>
      </section>
    </>
  )
}

export default EntrepreneurialComplaints;