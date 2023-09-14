/* import Button from "@/components/Button/Button" */
import style from './bannerAbout.module.css'

export default function Banner() {

    return (
        <section className={style.bannerContainer}>
            <div className={style.bannerDescription}>
                <h2 className={style.title}>Solucionamos <br/><span>tus reclamos</span></h2>
               {/*  <div className={style.buttonContain}><Button title='Consulta Gratis' className={style.button} /></div> */}
            </div>
        </section>
    )
}
