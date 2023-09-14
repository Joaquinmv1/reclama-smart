import hands from '../../../../assets/images/hands.svg'
import Image from 'next/image'
import style from './Rates.module.css'

export default function Rates() {
    return (
        <div className={style.background}>


            <section className={style.containerRates}>


                <h3 className={style.titleOne}>Trasparentes desde el inicio</h3>

                <aside className={style.contentRates}>
                    <div className={style.contentInfo}>
                        <h2 className={style.titleTwo}>Tarifa de <span className={style.span}>Exito</span> </h2>
                        <h4>Nuestro compromiso: <span className={style.span}>solo ganamos si tu ganas</span></h4>
                        <p className={style.analize}> Analizamos gratuitamente cada caso sin costo adelantado y asesoramos sobre que se puede reclamar y cómo hacerlo. Nos gustan las cosas claras, seguras y explicadas de un modo fácil</p>

                        <h2>Te mostramos 2 ejemplos</h2>
                        <article>
                            <div className={style.containExample}>
                                <h5 className={style.num}>1</h5>
                                <p>Compraste un televisor nuevo por s/ 1000, pero dejó de funcionar. Al ganar tu caso, calculamos s/ 200 (cobramos 20 % del valor de tu reclamo).</p>
                            </div>
                            <div className={style.containExample}>
                                <h5 className={style.num}>2</h5>
                                <p>Tienes un caso de fraude donde el importe es bien elevado, cobramos menos de 20 % del valor de tu caso para ofrecer un precio accesible para tú caso en concreto. Contáctanos para cotizarte.</p>
                            </div>
                        </article>
                    </div>
                    <Image className={style.imgHands} src={hands} width={500} height={500} alt="rates" />
                </aside>
            </section>
        </div>
    )
}