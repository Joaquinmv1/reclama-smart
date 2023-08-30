import Button from "@/components/Button/Button"
import style from './bannerAbout.module.css'
import Image from "next/image"
import fotoBanner from '../../../../assets/images/fotoAbout.svg'

export default function Banner() {

    return (
        <section className={style.bannerContainer}>
            <div className={style.bannerDescription}>
                <h2 className={style.title}>Ayudamos a las personas a resolver sus reclamos de manera <span>eficiente y sencilla</span></h2>
                <p className={style.description}>Nuestro propósito es hacer que resolver reclamos sea tan simple como comprar en línea.
                    Contamos con un equipo de expertos legales experimentados.</p>
                <div className={style.buttonContain}><Button title='Consulta Gratis' className={style.button} /></div>
            </div>
            <div className={style.imgContain}>
                <Image className={style.image} alt="bannerImg" src={fotoBanner} />
            </div>
        </section>
    )
}