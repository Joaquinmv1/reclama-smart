import style from "./cases.module.css"
import Image from "next/image"
import left from "../../../assets/images/left.png"
import rigth from "../../../assets/images/rigth.png"

export default function Cases() {
    return(
        <>
        <div className={style.casesContain}>
            <h3>Casos de éxito</h3>
            <p>Por motivos de protección de datos hemos cambiado los nombres</p>

            <div className={style.carrousel}>

                <div className={style.arrowLeft}>
                    <Image className={style.imageArrowLeft} src={left} alt="Arrow left"/>
                </div>

                <div className={style.box}>
                    <p>Luis C.</p>
                    <small>23/03/2023</small>
                </div>
                <div className={style.box}></div>
                <div className={style.box}></div>

                <div className={style.arrowRight}>
                    <Image className={style.imageArrowRigth} src={rigth} alt="Arrow right"/>
                </div>
            </div>
        </div>
        </>
    )
}