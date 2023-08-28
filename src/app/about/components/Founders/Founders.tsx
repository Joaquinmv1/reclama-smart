import style from "./founders.module.css";
import Image from "next/image";
import pic_one from "../../../../assets/images/marianaPic.png";
import pic_two from "../../../../assets/images/eluisaPic.png";

export default function Founders() {
  return (
    <>
      <div className={style.founderContain}>
        <h4>Fundadoras</h4>

        <div className={style.founders}>

          <div className={style.one}>
            <Image width={481} height={300}  className={style.picture} src={pic_one} alt="Mariana photo" />
            <h5>Mariana</h5>
          </div>

          <div className={style.two}>
            <Image width={481} height={300} className={style.picture} src={pic_two} alt="Eluisa photo" />
            <h5>Eluisa</h5>
          </div>

        </div>
      </div>
    </>
  )
}
