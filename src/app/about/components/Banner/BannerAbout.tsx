import Button from "@/components/Button/Button";
import style from "./bannerAbout.module.css";
import Link from "next/link";

export default function Banner() {
  return (
    <section className={style.bannerContainer}>
      <div className={style.bannerDescription}>
        <h2 className={style.title}>
          Solucionamos <span>tus reclamos</span>
        </h2>
        <div className={style.buttonContain}>
          <Link href="/contact">
            <Button title="Consulta Gratis" className={style.button} />
          </Link>
        </div>
      </div>
    </section>
  );
}
