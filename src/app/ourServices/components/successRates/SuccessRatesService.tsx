import Image from "next/image"
import { imgService } from "@/assets/constants/constants"
import style from './successRatesService.module.css'


export default function SuccessRatesService() {
    return (
        <>
            <section className={style.serviceContainer}>
                <article className={style.serviceTitle}>
                    <h1>Tarifa de <span>Éxito</span></h1>
                    <h4>Te mostramos un ejemplo:</h4>
                </article>
                <article className={style.stepsConatiner}>
                    <div className={style.containerLines}>
                        <section className={style.lines}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                        </section>
                    </div>
                    <section className={style.containerCard}>
                        {imgService.map(({ img, title, text }, index) => (
                            <article className={style.itemService} key={title}>
                                <section className={style.containerIndex}><div className={style.index}>{index + 1}</div></section>
                                <Image className={style.image} alt="img" src={img} />
                                <div className={style.itemInfo}>
                                    <span>{title}</span>
                                    <p>{text}</p>
                                </div>
                            </article>
                        ))}
                    </section>
                </article>
            </section>
        </>
    )
}