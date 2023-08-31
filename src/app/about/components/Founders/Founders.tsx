import style from "./founders.module.css";
import Image from "next/image";
import pic_one from "../../../../assets/images/marianaPic.png";
import pic_two from "../../../../assets/images/eluisaPic.png";
import linkedinIcon from "../../../../assets/images/linkedinIcon.png";
import Link from "next/link";

export default function Founders() {
  return (
    <>
      <section className={style.founderContain}>
        <h4>Fundadoras</h4>

        <div className={style.founders}>
          <div className={style.one}>
            <Image src={pic_one} alt="Mariana Pic" />

            <div className={style.info}>
              <h6>Mariana Silva Santisteban</h6>
              <p>CCO</p>

              <p>
                Abogada por la Universidad de Lima. 5+ años experiencia en
                Comercio, Publicidad, Libre Competencia y Derecho de Consumidor
                en firmas de abogados y empresas transnacionales.
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

          <div className={style.two}>
            <Image src={pic_two} alt="Eliusa Pic" />

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
      </section>
    </>
  );
}
