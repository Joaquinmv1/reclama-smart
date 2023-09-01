import Image from "next/image";
import style from './MapSection.module.css';
import mapImg from '../../../../assets/images/map-img.svg';

export default function MapSection() {
    return (
        <section className={style.containerMap}>
            <Image className={style.mapImg} src={mapImg} alt='Map image' />
            <aside className={style.contact}>
                <div className={style.content}>
                    <h2>Contáctanos</h2>
                    <p>Dirección:</p>
                </div>

                <div className={style.content}>
                    <h2>Información de contacto</h2>
                    <p>info@reclamaqui.pe</p>
                    <p>+ 51 932 468 027</p>
                </div>
            </aside>
        </section>
    )
}