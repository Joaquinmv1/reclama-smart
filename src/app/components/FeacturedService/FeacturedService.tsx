import style from "./feacturedService.module.css";
import Button from "@/components/Button/Button";
import { cardsServices } from "@/assets/constants/constants";
import { FeacturedServiceCard } from ".";
import Link from "next/link";

const FeacturedService = () => {
  return (
    <>
      <section className={style["container-feacturedService"]}>
        <article className={style["container-aboutServices"]}>
          <h2 className={style.titleServices}>
            Conoce nuestros <span style={{ color: "#FF5220" }}>servicios</span>
          </h2>
        </article>
        <ul className={style.cardContainer}>
          {cardsServices.map((card, i) => (
            <FeacturedServiceCard key={`${card.title}${i}`} card={card} />
          ))}
        </ul>
        <Link href="/ourServices">
          <Button className={style.buttonService} title="Más Servicios" />
        </Link>
      </section>
    </>
  );
};

export default FeacturedService;
