
import imgTeam from '../../../assets/images/team-image.png'
import Image from 'next/image';
import style from './Team.module.css';

export default function Team() {
    return (
        <section className={style.containerSection}>
            <aside className={style.asideContent}>
                <div className={style.body}>
                    <h3 className={style.title}>Somos un equipo</h3>

                    <h4>Somos <span>INNOVADORES,</span></h4>
                    <h4>estamos <span>COMPROMETIDOS,</span></h4>
                    <h4>superamos los <span>DESAFIOS.</span> </h4>

                </div>

                <p>Unidos y firmes en nuestras creencias de que la historia de una empresa excepcional se construye con cada jornada.
                    Guiados por el talento y la pasión, dejamos una huella distintiva mediante la innovación, la tecnología y una adaptación constante. Cada día es una oportunidad para forjar nuestro camino y redefinir el futuro empresarial.
                </p>
            </aside>

            <aside className={style.imgContainer}>

                <Image className={style.imageTeam} src={imgTeam} alt="Team image" width={600} height={400} />
            </aside>
        </section>
    )
}