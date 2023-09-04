"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import left from "../../../assets/images/left.png";
import right from "../../../assets/images/rigth.png";
import style from "./cases.module.css";

interface CaseData {
  name: string
  image: StaticImageData
  comment: string
}

interface CaseProps {
  data: CaseData[]
}

export default function Cases({ data }: CaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [screen, setScreen] = useState(3);

  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth < 599) {
        setScreen(1);
      } else if (window.innerWidth < 904) {
        setScreen(2);
      } else {
        setScreen(3);
      }
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => {
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  const handlePrev = () => {
    setAnimationDirection("slide-out");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - screen : prevIndex - screen
    );
  };

  const handleNext = () => {
    setAnimationDirection("slide-in");
    setCurrentIndex((prevIndex) =>
      prevIndex >= data.length - screen ? 0 : prevIndex + screen
    );
  };

  return (
    <>
      <div className={style.casesContain}>
        <h3>Casos de éxito</h3>

        <div className={style.carrousel}>
          {data.slice(currentIndex, currentIndex + screen)
            .map((item, index) => (
              <div className={`${style.box} 
            ${animationDirection === "slide-out"
                  ? style["slide-out"]
                  : animationDirection === "slide-in"
                    ? style["slide-in"]
                    : ""
                }`}
                onAnimationEnd={() => setAnimationDirection("")}
                key={index}
              >
                <Image width={100} height={100} src={item.image} alt="Cliente de ReclamaSmart" />
                <div className={style.comments}>
                  <p>{item.comment}</p>
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
        </div>

        <div className={style.arrows}>
          <div className={style.arrowLeft} onClick={handlePrev}>
            <Image className={style.imageArrowLeft} src={left} alt="Arrow left" />
          </div>
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