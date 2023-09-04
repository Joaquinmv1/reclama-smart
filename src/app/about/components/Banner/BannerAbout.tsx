import Button from "@/components/Button/Button"
import style from './bannerAbout.module.css'

export default function Banner() {

    return (
        <section className={style.bannerContainer}>
            <div className={style.bannerDescription}>
                <h2 className={style.title}>Solucionamos tus reclamos de forma <span>rápida y eficaz</span></h2>
                <p className={style.description}>Nuestro propósito es que resolver tus reclamos sea tan sencillo como comprar en línea.</p>
                <p className={style.description2}>Contamos con un equipo de abogados experimentados que te ayudarán en todo el proceso.</p>
                <div className={style.buttonContain}><Button title='Consulta Gratis' className={style.button} /></div>
            </div>
        </section>
    )
}