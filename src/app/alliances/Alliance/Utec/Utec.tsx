import Image from "next/image";
import { DateAlliance, TitleAlliance } from "../../components";
import UtectImg from '../../../../assets/images/alliancesView/image-removebg 2.jpg';
import style from './Utec.module.css';

function Utec() {
  return (
    <>
      <section className={style.containerUtec}> 
        <div className={style.allianceData}>
          <TitleAlliance title="Fem-Lab" />
          <DateAlliance date="" about="Participación" />
          <Image className={style.img} src={UtectImg} alt="utec Image" />
          <p className={style.text}>Me complace compartir que hemos sido seleccionada como una de las afortunadas 16 participantes del primer cohort del emocionante programa FemLab. Este programa representa una oportunidad transformadora en mi camino hacia el éxito y el empoderamiento</p>
        </div>
      </section>
    </>
  )
}

export default Utec;