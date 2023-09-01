import Image from "next/image";
import { imgTrajectory } from "@/assets/constants/constants";
import style from './trajectory.module.css';
import TrajectoryResponsive from "./components/TrajectoryResponsive";

interface TrajectoryItemProps {
    title: string
    description: string
}
function TrajectoryItem({ title, description }: TrajectoryItemProps) {
    return (
        <div className={style.trajectoryItem}>
            <span>{title}</span>
            <p>{description}</p>
        </div>
    );
}

export default function Trajectory() {
    return (
        <section className={style.containerTrajectory}>
            <h3>Reclama Smart a lo largo de los años</h3>
            <article className={style.statsSection}>
                <TrajectoryItem title="+100" description="CLIENTES ATENDIDOS" />
                <TrajectoryItem title="+40K" description="SOLES RECUPERADOS" />
                <TrajectoryItem title="+6K" description="HORAS DE SERVICIO Y EXPERIENCIA" />
            </article>

            <h4>Compartimos nuestro camino</h4>
            <TrajectoryResponsive/>
            <section className={style.imagesSection}>
                <div className={style.imageContainer}>
                    {imgTrajectory.map(({ img }, index) => (
                        <Image width={160} height={160} alt="img" src={img} key={index} />
                    ))}
                </div>
                <article className={style.line}>
                    <div />
                    <div />
                    <div />
                    <div />
                </article>
                <article className={style.timeline}>
                    <div className={style.timelineItem}>
                        <span>Reclamaquí</span>
                        <p>con un MVP para crear una empresa digital</p>
                    </div>
                    <div className={style.timelineItem}>
                        <span>Canal 9</span>
                        <p>Entrevista Canal 9 “El Cliente”</p>
                    </div>
                    <div className={style.timelineItem}>
                        <span>ULima Emprendimiento Social</span>
                        <p>Ganamos en el Contest “ULima Emprendimiento Social”</p>
                    </div>
                    <div className={style.timelineItem}>
                        <span>Reclama Smart</span>
                        <p>Lanzamos nueva plataforma</p>
                    </div>
                </article>
            </section>
        </section>
    );
}
