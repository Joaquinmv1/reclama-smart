"use client";
import React, { useState } from "react";
import Image from "next/image";
import left from "../../../assets/images/left.png";
import right from "../../../assets/images/rigth.png";
import style from "./cases.module.css";

export default function Cases() {
  const data = [
    {
      name: "Luis C.",
      date: "23/03/2023",
      amount: "+ s/ 5.780",
    },
    {
      name: "Ana S.",
      date: "15/06/2023",
      amount: "+ s/ 8.320",
    },
    {
      name: "Carlos M.",
      date: "02/09/2023",
      amount: "+ s/ 3.950",
    },
    {
      name: "María R.",
      date: "10/12/2023",
      amount: "+ s/ 6.720",
    },
    {
      name: "Javier P.",
      date: "05/02/2024",
      amount: "+ s/ 9.150",
    },
    {
      name: "Sofía G.",
      date: "20/04/2024",
      amount: "+ s/ 7.860",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handlePrev = () => {
    setAnimationDirection("slide-out");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setAnimationDirection("slide-in");
    setCurrentIndex((prevIndex) =>
      prevIndex >= data.length - 3 ? 0 : prevIndex + 3
    );
  };

  return (
    <>
      <div className={style.casesContain}>
        <h3>Casos de éxito</h3>
        <p>Por motivos de protección de datos hemos cambiado los nombres</p>

        <div className={style.carrousel}>
            
          <div className={style.arrowLeft} onClick={handlePrev}>
            <Image
              className={style.imageArrowLeft}
              src={left}
              alt="Arrow left"
            />
          </div>

          {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <div
              className={`${style.box} ${
                animationDirection === "slide-out"
                  ? style["slide-out"]
                  : animationDirection === "slide-in"
                  ? style["slide-in"]
                  : ""
              }`}
              onAnimationEnd={() => setAnimationDirection("")}
              key={index}
            >
              <div className={style.textC}>
                <h5>{item.name}</h5>
                <small>{item.date}</small>
              </div>
              <p>{item.amount}</p>
            </div>
          ))}

          <div className={style.arrowRight} onClick={handleNext}>
            <Image
              className={style.imageArrowRigth}
              src={right}
              alt="Arrow right"
            />
          </div>
        </div>
      </div>
    </>
  );
}
