'use client'
import Image from 'next/image';
import calendlyImg from '../../../../assets/images/calendly-img.png';
import faceCalendly from '../../../../assets/images/face-calendly.svg';
import style from './BannerContact.module.css';
import Calendly from '../Canlendly/Calendly';

export default function BannerContact() {
    return (
        <section className={style.bannerSection}>
            <aside className={style.titles}>

                <h2 className={style.title}>Estamos a tu <span>disposicion</span> </h2>
                <h3>Programa una reunión <span>gratis</span> </h3>
            </aside>
            <aside className={style.containerBody}>


                <section className={style.containerSteps}>



                    <div className={style.content}>

                        <div className={style.logoStep}>
                            <h3>1</h3>
                        </div>
                        <aside>
                            <h4>Selecciona tu horario</h4>
                            <p>Descubre las opciones en nuestro calendario de disponibilidad</p>
                        </aside>
                    </div>


                    <div className={style.content}>
                        <div className={style.logoStep}>
                            <h3>2</h3>
                        </div>
                        <aside>

                            <h4>Completa la información</h4>
                            <p>Empecemos por conocerte mejor. <br /> Indícanos tu nombre, correo electrónico y cualquier información que consideres relevante que sepamos.</p>
                        </aside>
                    </div>
                    <div className={style.content}>

                        <div className={style.logoStep}>
                            <h3 >3</h3>
                        </div>
                        <aside>
                            <h4>Confirmación y recordatorio:</h4>
                            <p>Una vez agendada tu cita, recibirás una confirmación automática.</p>
                        </aside>
                    </div>
                    <div id='calend'>
                        <Calendly />
                    </div>
                </section>

                <article className={style.imagesContent}><Image className={style.calendlyImg} src={calendlyImg} alt='Calendly image' /> <Image className={style.faceCalendly} src={faceCalendly} alt='Face Calendly' /><div className={style.point}></div></article>
            </aside>





        </section >
    )
}