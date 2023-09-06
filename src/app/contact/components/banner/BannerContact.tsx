import Button from '@/components/Button/Button';
import style from './BannerContact.module.css';
import Image from 'next/image';
import calendlyImg from '../../../../assets/images/calendly-img.png';

export default function BannerContact() {
    return (
        <section className={style.bannerSection}>
            <aside className={style.containerBody}>

                <h2 className={style.title}>Estamos a tu <span>disposicion</span> </h2>
                <h3>Programa una reunión <span>gratis</span> </h3>
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
                        <p>Empecemos por conocerte mejor.Indícanos tu nombre, correo electrónico y cualquier información que consideres relevante que sepamos.</p>
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

                <Button title={"Agendar reunion"} className={style.button} />
            </aside>

            <article><Image className={style.calendlyImg} src={calendlyImg} alt='Calendly image' /></article>
        </section>
    )
}