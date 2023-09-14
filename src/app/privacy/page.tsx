import Link from "next/link";
import { ArticleTerms } from "../terms/page";
import styles from './Privacity.module.css';

export default function Privacity() {
    const privacity = [
        {
            title: "IDENTIDAD",
            text: "RECLAMAQUI S.A.C. (en adelante, “RECLAMA SMART”), identificada con R.U.C. N° 20610421157."
        },
        {
            title: "FINALIDAD",
            text: "Los datos personales proporcionados serán utilizados para la gestión integral de su caso, lo que abarca todas las actividades relacionadas con la prestación de servicios, facturación, firma de documentos, pagos y reclamaciones, según corresponda. Además, al proporcionar sus datos personales, el titular de los mismos o el Usuario acepta que estos podrán ser empleados con el propósito de enviar información con fines publicitarios relacionados con los productos y servicios de RECLAMA SMART, así como con fines de investigación."
        },
        {
            title: "DATOS PERSONALES OBLIGATORIOS",
            text: "Para llevar a cabo las finalidades descritas en la presente política de privacidad, es obligatorio que nos proporcione los siguientes datos personales: nombre y apellidos, documento de identidad (por ejemplo D.N.I., C.E. o Pasaporte), número de celular, correo electrónico y domicilio."
        },
        {
            title: "CONSECUENCIAS DE NO PROPORCIONAR TUS DATOS",
            text: "El Usuario reconoce que la provisión de sus datos personales es de vital importancia para que Reclama Smart pueda brindarle sus Productos o Servicios. Por consiguiente, acepta que, en caso de no proporcionar los datos personales mencionados anteriormente, no podrá adquirir los productos o servicios disponibles a través de la plataforma virtual."
        },
        {
            title: "TIEMPO",
            text: "Los datos serán conservados mientras dure la relación contractual, posteriormente a la misma, se conservarán los datos para acciones promocionales hasta que revoque su consentimiento."
        },
        {
            title: "EJERCICIO DE LOS DERECHOS ARCO",
            text: "Puede ejercer los derechos de acceso, rectificación, cancelación y oposición, a través del nuestro Libro de Reclamaciones por el Canal de WhatsApp +51 982 979 268 y por nuestro correo electrónico info@reclamasmart.pe. De considerar que no ha sido atendido en el ejercicio de sus derechos puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales, dirigiéndose a la Mesa de Partes del Ministerio de Justicia y Derechos Humanos: Calle Scipión Llona 350, Miraflores, Lima, Perú llenando el formulario publicado en el siguiente enlace: "
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

                <Link className={styles.link} target="_blank" href={"https://sgd.minjus.gob.pe/sgd-virtual/public/ciudadano/ciudadanoMain.xhtml"}>https://sgd.minjus.gob.pe/sgd-virtual/public/ciudadano/ciudadanoMain.xhtml.</Link>

            </aside>

        </section>
    )
}