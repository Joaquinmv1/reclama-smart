import Image from 'next/image';
import { Date, TitleBlog } from '../../components';
import style from './ConsumerProtection.module.css';
import ladrones from '../../../../assets/images/blog/ladrones.jpg';
import Link from 'next/link';

function ConsumerProtection() {
  return (
    <>
      <section className={style.containerConsumerProtection}>
        <div className={style.blogData}>
          <TitleBlog>
            <h3>Protege tus finanzas: 3 medidas antifraude bancario</h3>
          </TitleBlog>
          <Date date='05/04/2023' />
          <Image className={style.img} src={ladrones} alt='ConsumerProtection Image' />
          <article className={style.stepsConsumerProtection}>
            <p>En los últimos años, hemos sido testigos de un marcado aumento en la necesidad y la creciente prevalencia de realizar transacciones financieras sin necesidad de presencia física, con un énfasis particular en las operaciones realizadas por teléfono. Si bien estas prácticas han brindado a los usuarios la comodidad de llevar a cabo movimientos financieros con un simple toque de pantalla, también han generado una mayor vulnerabilidad ante las cada vez más sofisticadas amenazas de robos digitales.</p>
            <p>El Banco de la Nación ha emitido una importante advertencia a sus valiosos clientes y usuarios con respecto a una peligrosa modalidad de estafa telefónica conocida como {"spoofing"}. Esta táctica fraudulenta implica el enmascaramiento de números de teléfono para hacerse pasar por instituciones financieras legítimas, generando una falsa sensación de confianza con el fin de obtener información confidencial de los clientes.</p>
            <p>Los estafadores utilizan esta artimaña para persuadir a los clientes a revelar información crítica, como saldos, contraseñas y códigos, lo que les permite llevar a cabo operaciones fraudulentas en línea y sustraer fondos de manera ilegal.</p>
            <p>Es por ello que consideramos de suma importancia brindar las siguientes recomendaciones y recordatorios para prevenir este tipo de fraude:</p>
          </article>
          <article className={style.acuerdos}>
            <p><span>1. No compartir información confidencial:</span> Es vital recordar que una institución financiera de confianza nunca solicitará información confidencial, como saldos, nombres de usuario y contraseñas, códigos SMS, números de tarjeta, etc., a través de llamadas telefónicas, mensajes de texto (SMS), correos electrónicos u otros medios. Estos datos son privados y nunca deben ser compartidos.</p>
            <p><span>2. Colgar inmediatamente:</span> Si recibes una llamada que solicita información confidencial o que le parece sospechosa, desiste          de seguir hablando con la persona que llama, esto podría ser un intento de fraude y es esencial proteger su información.</p>
            <p><span>3. Monitorear tus saldos y cambiar tus contraseñas para garantizar la seguridad de tu dinero:</span>  Si has recibido una llamada sospechosa, existe la posibilidad de que tu información confidencial esté en riesgo. Te aconsejamos monitorear tus saldos y cambiar tus contraseñas para garantizar la seguridad de tu dinero.</p>
          </article>
          <p className={style.p}>¿Ha experimentado algo similar? <span className={style.span}>reclama</span> <span>smart</span> con nosotros ¡Sólo nos tendrás que pagar si es que recuperamos tu plata!</p>
          <p className={style.font}>Fuente:<br/> <Link target='_blank' className={style.link} href={'https://www.bn.com.pe/noticias/2023/21082023-llamada-de-banco-podria-no-serlo-spoofing-telefonico.html'}>bit.ly/3sVwNgW</Link> </p>
        </div>
      </section>
    </>
  )
}

export default ConsumerProtection;