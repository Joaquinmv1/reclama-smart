import Link from "next/link";
import { ArticleTerms } from "../terms/page";
import styles from './Privacity.module.css';

export default function Privacity() {
    const privacity = [
        {
            title: "IDENTIDAD",
            text: "RECLAMAQUI S.A.C. (en adelante, 'Reclamaquí')."
        },
        {
            title: "FINALIDAD",
            text: "En caso tus datos califiquen como datos personales, serán utilizados para gestionar tu caso; esto incluye todas las actividades relacionadas con la atención los servicios, facturación, firma de documentos, pagos, reclamos, según corresponda. \n Envío de información con fines publicitarios respecto de los productos y servicios de Reclamaquí. El envío de esta información se dará siempre y cuando Reclamaquí haya obtenido su consentimiento previo y expreso."
        },
        {
            title: "DATOS PERSONALES OBLIGATORIOS",
            text: "Para llevar a cabo las finalidades descritas en la presente política de privacidad, es obligatorio nos proporcione los siguientes datos personales: nombre y apellidos, documento de identidad, número de celular, correo electrónico y domicilio."
        },
        {
            title: "CONSECUENCIAS DE NO PROPORCIONAR TUS DATOS",
            text: "De no proporcionar los datos personales antes señalados no se podrá crear tu cuenta y, en consecuencia, no podrá adquirir los servicios ofrecidos a través de nuestro canal de WhatsApp."
        },
        {
            title: "TIEMPO",
            text: "Los datos serán conservados mientras dure la relación contractual, posteriormente a la misma, se conservarán los datos para acciones promocionales hasta que revoque tu consentimiento. "
        },
        {
            title: "EJERCICIO DE LOS DERECHOS ARCO",
            text: "Puede ejercer los derechos de acceso, rectificación, cancelación y oposición, a través del correo electrónico info@reclamaqui.pe. \n De considerar que no ha sido atendido en el ejercicio de tus derechos puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales, dirigiéndose a la Mesa de Partes del Ministerio de Justicia y Derechos Humanos: Calle Scipión Llona 350, Miraflores, Lima, Perú llenando el formulario publicado en el siguiente enlace: \n \n https://www.minjus.gob.pe/wpcontent/uploads/2018/12/FORMULARIO-DE-PROCEDIMIENTO-TRILATERAL-DE-TUTELA.pdf."
        }
    ]
    return (
        <section className={styles.containerGeneral}>
            <aside className={styles.banner}>

                <h1 className={styles.Privacity}>Política de Privacidad</h1>
                <p>https://www.reclamasmart.com.pe</p>
            </aside>

            <aside className={styles.section}>
                {
                    privacity.map((item, index) => {
                        return (

                            <div key={index} className={styles.content} >
                                <ArticleTerms title={item.title} text={item.text} />
                            </div>


                        )
                    })
                }

                <Link className={styles.link} href={"https://www.minjus.gob.pe/wpcontent/uploads/2018/12/FORMULARIO-DE-PROCEDIMIENTO-TRILATERAL-DE-TUTELA.pdf."}>https://www.minjus.gob.pe/wpcontent/uploads/2018/12/FORMULARIO-DE-PROCEDIMIENTO-TRILATERAL-DE-TUTELA.pdf.</Link>

            </aside>

        </section>
    )
}