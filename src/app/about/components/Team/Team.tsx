import imgTeam from 'src/assets/images/team-image.png';
import Image from 'next/image';
import style from './Team.module.css';

export default function Team() {
    return (
        <section className={style.containerGeneral}>

            <section className={style.containerTeam}>
                <div className={style.containerBody}>


                    <h2 className={style.title}>
                        Somos  equipo <br />
                        Somos INNOVADORES,<br />
                        estamos COMPROMETIDOS,<br />
                        superamos los DESAFIOS.
                    </h2>

                    <p className={style.paragraph}>
                        Unidos y firmes en nuestras creencias de que la historia de una empresa excepcional se construye con cada jornada.
                        Guiados por el talento y la pasión, dejamos una huella distintiva mediante la innovación, la tecnología y una adaptación constante. Cada día es una oportunidad para forjar nuestro camino y redefinir el futuro empresaria
                    </p>
                </div>

            </section>
            <div className={style.containerImage}>
                <Image className={style.imgTeam} src={imgTeam} alt="Team" />
            </div>
        </section>
    )
}