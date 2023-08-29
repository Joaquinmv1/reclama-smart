import Image from 'next/image'
import imgSuccess from '../../../../assets/images/hands-success.svg'
import style from './SuccessRate.module.css'

export default function SuccessRate() {

    return (
        <section className={style.successContainer}>
            <div className={style.successBody}>

                <article>

                    <h2 className={style.title}>Tarifa de <span>éxito</span> </h2>
                    <p className={style.pharagraph}>Imagina que adquiriste un televisor por s/. 1000 y falló poco después debido a defectos de fábrica. Presentas el reclamo con nosotros y gestionamos todo el proceso. Si ganamos el caso, la entidad pública ordena a la empresa reembolsarte. Así, recuperas s/. 800 y nosotros recibimos una parte por nuestros servicios.</p>
                </article>

                <article>

                    <h3>Cuentas claras</h3>
                    <p className={style.pharagraph}>Así serían los cálculos de cuánto se tendría que pagar según el anterior ejemplo:</p>
                    <h4>Tarifa: 20% x s/ 1.000 = s/ 200</h4>
                    <h5>Tú recuperas: s/ 800</h5>

                </article>
            </div>
            <div className={style.containerImg}>

                <Image src={imgSuccess} alt="logo" />
            </div>
        </section>
    )
}