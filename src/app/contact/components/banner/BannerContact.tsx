'use client'
import Image from 'next/image';
import style from './BannerContact.module.css';
import Calendly from '../Canlendly/Calendly';
import calendlyImg from '../Group 3513.svg'

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
                        <section className={style.stepInfo}>
                            <h4>Selecciona tu horario:</h4>
                            <p>Descubre las opciones en nuestro calendario de disponibilidad</p>
                        </section>
                    </div>
                    <div className={style.content}>
                        <div className={style.logoStep}>
                            <h3>2</h3>
                        </div>
                        <section className={style.stepInfo}>
                            <h4>Completa la información:</h4>
                            <p>Empecemos por conocerte mejor. <br /> Indícanos tu nombre, correo electrónico y cualquier información que consideres relevante que sepamos.</p>
                        </section>
                    </div>
                    <div className={style.content}>
                        <div className={style.logoStep}>
                            <h3 >3</h3>
                        </div>
                        <section className={style.stepInfo}>
                            <h4>Confirmación y recordatorio:</h4>
                            <p>Una vez agendada tu cita, recibirás una confirmación automática.</p>
                        </section>
                    </div>
                    <div id='calend'>
                        <Calendly />
                    </div>
                </section>
                <picture className={style.imagesContent}>
                    <Image alt='calendly' src={calendlyImg} />
                </picture>
            </aside>
        </section >
    )
}