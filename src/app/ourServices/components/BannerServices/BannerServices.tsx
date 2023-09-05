import style from "./BannerServices.module.css";
import icon from "../../../../assets/images/confirmIcon.png";
import Image from "next/image";


export default function BannerServices() {
  return (
    <div className={style.bannerContain}>
      <h1>
        Somos la mejor opción <br /> <span>para resolver tus reclamos</span>
      </h1>

      <div className={style.servicesContain}>
        <div className={style.services}>
          <div>
            <Image width={30} height={20} src={icon} alt="Confirm Icon" />
            <h6>Nuestro conocimiento está a tu disposición</h6> {/* ver si agregar "br" */}
          </div>

          <p>
            Somos expertos en la materia. Evaluaremos tu caso y te daremos la
            mejor solución.
          </p>
        </div>

        <div className={style.services}>
          <div>
            <Image width={30} height={20} src={icon} alt="Confirm Icon" />
            <h6>Garantizamos tu tranquilidad</h6> {/* ver si agregar "br" */}
          </div>

          <p>
            No te preocupes por el proceso legal. Nosotros nos encargaremos de
            todo.
          </p>
        </div>

        <div className={style.services}>
          <div>
            <Image width={30} height={20} src={icon} alt="Confirm Icon" />
            <h6>Solo ganamos  si tú ganas</h6> {/* ver si agregar "br" */}
          </div>
          <p>
            Nos interesa tu éxito. Nuestras tarifas son transparentes y justas.
          </p>
        </div>
      </div>
    </div>
  );
}
