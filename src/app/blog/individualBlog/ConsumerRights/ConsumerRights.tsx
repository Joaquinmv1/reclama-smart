import Image from "next/image";
import { Date, TitleBlog } from "../../components";
import banner from '../../../../assets/images/blog/banner.jpg';
import style from './ConsumerRights.module.css';
import Link from "next/link";

function ConsumerRights() {
  return (
    <>
      <section className={style.containerConsumer}>
        <div className={style.blogData}>
          <TitleBlog>
            <h3>3 derechos fundamentales como consumidor</h3>
          </TitleBlog>
          <Date date="05/04/2023" />
          <article className={style.consumer}>
            <Image src={banner} alt="Consumer Rights Image" />
            <p>No se puede subestimar la importancia de los derechos de los consumidores. Nuestra experiencia demuestra que a menudo surgen problemas cuando se vulnera uno de estos tres derechos. Por ello, nos gustaría explicarles brevemente, ¿qué derechos tenemos realmente como consumidores?</p>
          </article>
          <article className={style.stepsBlog}>
            <div className={style.step}>
              <h4>1. Derecho a recibir un producto o servicio apropiado y adecuado</h4>
              <p>Debe existir una correspondencia entre lo que esperas recibir y lo que efectivamente te brinda el proveedor. Esto incluye, que los productos o servicios lleguen en condiciones normales o previsibles, no representen riesgo o peligro para tu vida, salud e integridad física. La empresa tiene que darte toda la información relevante y correcta para que realices una buena decisión de compra, que se ajuste a tus intereses. Pregunta por la letra pequeña y piensa detenidamente si puedes confiar en el proveedor.</p>
            </div>
            <div className={style.step}>
              <h4>2. Derecho a recibir información oportuna, suficiente, veraz y fácilmente accesible</h4>
              <p>No están permitidos los métodos comerciales coercitivos, agresivos o engañosos, y abusivos en el cobro. La información que te brinda el proveedor no debe inducirte al error. Es importante resaltar que uno de los fundamentos para la protección al consumidor es la “desigualdad en el manejo de información” que existe entre los proveedores (de productos o servicios) y los consumidores. Verifica la publicidad e información recibida y las condiciones o circunstancias de la compra. Esta comunicación es mejor hacerla por escrito para tener constancia de la información recibida.</p>
            </div>
            <div className={style.step}>
              <h4>3. Derecho a la reparación o reposición de un producto: </h4>
              <p>¿Tienes algún problema con el producto o servicio y quieres que se lo cambien o que le devuelvan el dinero? Podemos evaluar tu caso y te informamos si tienes el derecho a una nueva ejecución del servicio o, incluso, a la devolución de la cantidad pagada. Esto depende según las circunstancias o casos que establezca el Código de Protección y Defensa del Consumidor (Ley Nº 29571).</p>
            </div>
          </article>
          <p className={style.aclaracion}>reclama <span>smart</span> con nosotros ¡Sólo nos tendrás que pagar si es que recuperamos tu plata!</p>
          <p className={style.fuente}> Fuente:<br/> <Link className={style.link} href={'https://www.consumidor.gob.pe/tus-derechos'}>bit.ly/3RFkL5N</Link></p>
        </div>
      </section>
    </>
  )
}

export default ConsumerRights;