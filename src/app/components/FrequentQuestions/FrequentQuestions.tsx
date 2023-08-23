"use client";
import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/chevron-up.png";
import style from "./FrequentQuestions.module.css";

export default function FrequentQuestions() {
  const info = [
    {
      title: "¿Tengo que pagar algo por adelantado?",
      description:
        "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
    },
    {
      title: "¿Quién puede reclamar?",
      description:
        "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
    },
    {
      title: "¿Cuanto tiempo tengo para reclamar?",
      description:
        "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
    },
    {
      title: "Ya presente mi reclamo con ustedes, ¿y ahora que?",
      description:
        "No,  no tienes que adelantar ni un sol. Nosotros asumimos todos los gastos, incluyendo costos de trámite y otras tasas legales. Tú solo pagas  si ganamos tu caso y recuperamos tu dinero. No tienes que pagar nada por adelantado. Nosotros asumimos todos los gastos durante el proceso, lo que incluye costos de trámites y tasas legales. Si ganamos el caso y recuperamos el dinero, nos pagan.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  return (
    <div className={`${style["answers-contain"]} container fluid`}>
      <h2>Preguntas frecuentes</h2>
      {info.map((inf, index) => (
        <div className={style.acordion} key={index}>
          <div
            className={`${style.acordionHeader} ${
              openAccordion === index ? style.active : ""
            }`}
            onClick={() => handleAccordion(index)}
          >
            <h5>{inf.title}</h5>
            <Image
              className={`${style.acordionImg} ${openAccordion === index ? style.rotated : ""}`}
              src={arrow}
              alt="Arrow icon"
            />
          </div>

          {openAccordion === index && (
            <div className={`${style.acordionBody} ${openAccordion === index ? style.open : ""}`}>
              <p>{inf.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}