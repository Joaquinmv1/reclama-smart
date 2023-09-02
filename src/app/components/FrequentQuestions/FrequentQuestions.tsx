"use client";

import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/chevron-up.png";
import style from "./FrequentQuestions.module.css";
import { info } from "@/assets/constants/constants";

export default function FrequentQuestions() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setOpenAccordion(index === openAccordion ? null : index);
  };

  return (
    <section className={`${style["answers-contain"]}`}>
      <h2>Preguntas frecuentes</h2>
      {info.map((inf, index) => (
        <div className={style.acordion} key={inf.title}>
          <div
            className={`${style.acordionHeader} ${openAccordion === index ? style.active : ""
              } ${index === 0 ? style.firstAccordion : ""} ${index === info.length - 1 ? style.lastAccordion : ""}`}
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
    </section>
  );
}