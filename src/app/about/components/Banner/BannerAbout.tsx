import Button from "@/components/Button/Button"
import style from './bannerAbout.module.css'
import Image from "next/image"
import fotoBanner from '../../../../assets/images/fotoAbout.svg'

export default function Banner() {

    return (
        <section className={style.bannerContainer}>
            <div className={style.bannerDescription}>
                <h2 className={style.title}>Solucionamos tus reclamos de forma <span>eficiente y sencilla</span></h2>
                <p className={style.description}>Nuestro propósito es que resolver tus reclamos sea tan sencillo como comprar en línea.</p>
                <p className={style.description2}>Contamos con un equipo de abogados experimentados que te ayudarán en todo el proceso.</p>
                <div className={style.buttonContain}><Button title='Consulta Gratis' className={style.button} /></div>
            </div>
            {/* <div className={style.imgContain}>
                <Image className={style.image} alt="bannerImg" src={fotoBanner} />
            </div> */}
        </section>
    )
}