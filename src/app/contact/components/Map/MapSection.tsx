import Image from "next/image";
import style from './MapSection.module.css';
import mapImg from '../../../../assets/images/map.svg';
import wpImg from '../../../../assets/images/wp-vector.svg';
import mailImg from '../../../../assets/images/mail-vector.svg';
import Link from "next/link";
import Button from "@/components/Button/Button";
import { redes } from '@/assets/constants/constants'
import TermsAndConditions from "@/app/components/Terms&Conditions/Terms&Conditions";

export default function MapSection() {
    return (
        <div className={style.sectionMap}>
            <h2 className={style.title}>Nos encontramos en Peru</h2>
            <section className={style.containerMap}>

                <div className={style.containerImg}>
                    <Image className={style.mapImg} src={mapImg} alt='Map image' />
                </div>

                <aside className={style.contact}>

                    <div className={style.content}>
                        <Image className={style.mailImg} src={wpImg} alt='Whatsapp image' />
                        <h2>EMAIL</h2>
                        <p>info@reclamaqui.pe</p>
                    </div>

                    <div className={style.content}>
                        <Image className={style.wpImg} src={mailImg} alt='Mail image' />
                        <h2>WHATSAPP</h2>
                        <p>+ 51 932 468 027</p>
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
                        <Link href={redes[3].link}>

                            <Button title='Consulta gratis' className={style.button} />
                        </Link>
                    </div>
                </aside>
            </section>
        </div>
    )
}