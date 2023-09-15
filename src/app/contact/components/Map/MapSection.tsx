import Image from "next/image";
import style from './MapSection.module.css';
import mapImg from '../../../../assets/images/map.svg';
import wpImg from '../../../../assets/images/wp-vector.svg';
import mailImg from '../../../../assets/images/mail-vector.svg';
import Link from "next/link";
import Button from "@/components/Button/Button";
import { redes } from '@/assets/constants/constants'


export default function MapSection() {
    return (
        <div className={style.sectionMap}>
            <h2 className={style.title}>Nos encontramos en el <span style={{ color: "#FF5220" }}>Perú</span></h2>
            <section className={style.containerMap}>

                <div className={style.containerImg}>
                    <Image className={style.mapImg} src={mapImg} alt='Map image' />
                </div>

                <aside className={style.contact}>

                    <div className={style.content}>
                        <Image className={style.wpImg} src={mailImg} alt='Mail image' />
                        <h2>EMAIL</h2>
                        <Link
                            href="mailto:mesadepartes.legal@reclamasmart.com.pe"
                            target="_blank"
                            className={style.link}
                        >
                            <p>info@reclamasmart.pe</p>
                        </Link>
                    </div>

                    <div className={style.content}>
                        <Image className={style.mailImg} src={wpImg} alt='Whatsapp image' />

                        <h2>WHATSAPP</h2>
                        <Link className={style.link} target="_blank" href="https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20ReclamaSmart">
                            <p>+ 51 932 468 027</p>
                        </Link>
                    </div>

                    <div className={style.containerRedes}>

                        <div className={`${style.redes} ${style.content}`}>
                            <h2>Contactanos</h2>
                            <p>Te brindaremos asistencia inmediata con tu caso</p>
                            <div className={style.redes}>

                                {
                                    redes.map((red, i) => <Link target='_blank' key={`${red} ${i}`} href={red.link}> <Image className={style.red} src={red.img} alt="logo-red" /></Link>)
                                }
                            </div>
                        </div>
                        <Link target="_blank" href="https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20ReclamaSmart">
                            <Button title='Consulta gratis' className={style.button} />
                        </Link>
                    </div>
                </aside>
            </section>
        </div>
    )
}