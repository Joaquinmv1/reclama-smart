import style from "./OurFounders.module.css";
import Image from "next/image";
import Link from "next/link";
import linkedinIcon from "../../../../assets/images/linkedinIcon.png";
import team from "../../../../assets/images/team.png";

export default function OurFounders() {
  return (
    <div className={style.teamContainer}>
      <h2>
        Somos <span>EQUIPO</span>
      </h2>

      <div className={style.team}>
        <div className={style.one}>
          <div className={style.info}>
            <h6>Mariana Silva Santisteban</h6>
            <p>CCO</p>

            <p>
              Abogada por la Universidad de Lima. 5+ años experiencia en
              Comercio, Publicidad, Libre Competencia y Derecho de Consumidor en
              firmas de abogados y empresas transnacionales.
            </p>

            <Link href="#">
              <Image
                width={40}
                height={40}
                src={linkedinIcon}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>

        <Image src={team} alt="Team" />

        <div className={style.two}>
          <div className={style.info}>
            <h6>Eluisa Maria Helbig-Marchena</h6>
            <p>CEO</p>

            <p>
              Abogada alemana, PhD en Derecho por la Universidad de Tübingen, 
              5+ años experiencia en Litigios, desarrolló el primer índice de
              Legal Tech en América Latina.
            </p>

            <Link href="#">
              <Image
                width={40}
                height={40}
                src={linkedinIcon}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
