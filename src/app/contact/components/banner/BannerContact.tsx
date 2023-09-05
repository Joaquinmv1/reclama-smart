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
                    <h3 className={style.logoStep}>1</h3>
                    <aside>
                        <h4>Elige tu horario:</h4>
                        <p>Explora los horarios disponibles en nuestro calendario.</p>
                    </aside>

                </div>
                <div className={style.content}>
                    <h3 className={style.logoStep}>2</h3>
                    <aside>

                        <h4>Completa la información</h4>
                        <p>¡Déjanos conocerte un poco más! tu nombre, correo electrónico y detalles adicionales que puedan ser útiles para la reunión.</p>
                    </aside>
                </div>
                <div className={style.content}>
                    <h3 className={style.logoStep}>3</h3>
                    <aside>
                        <h4>Confirmaciones y recordatorios automáticos</h4>
                        <p>Después de reservar tu cita,recibirás una confirmación automática.</p>
                    </aside>
                </div>

                <Button title={"Agendar reunion"} className={style.button} />
            </aside>

            <article><Image src={calendlyImg} alt='Calendly image' /></article>
        </section>
    )
}