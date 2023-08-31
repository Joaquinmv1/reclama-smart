"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import left from "../../../assets/images/left.png";
import right from "../../../assets/images/rigth.png";
import style from "./cases.module.css";

<<<<<<< HEAD
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
  }
];
=======
//PERSONS
import person1 from "../../../assets/images/person1.jpg"
import person2 from "../../../assets/images/person2.jpg"
import person3 from "../../../assets/images/person3.jpg"
import person4 from "../../../assets/images/person4.jpg"
import person5 from "../../../assets/images/person5.jpg"
import person6 from "../../../assets/images/person6.jpg"

export default function Cases() {
  const data = [
    {
      name: "Luis",
      image: person1,
      comment: '"Me ayudaron a recuperar mi dinero tras años de lucha. Finalmente la empresa me devolvió la plata de un viaje cancelado que ya había dado por perdida"',
    },
    {
      name: "Ana",
      image: person2,
      comment: '"Gracias a reclamasmart, pude recuperar la plata por un vuelo al que no me dejaron abordar nunca."',
    },
    {
      name: "Carlos",
      image: person3,
      comment: '"Después de más de un año de tratar de recuperar dinero que había pagado por mis lentes, reclamasmart pudo lograrlo en meses. Realmente espectacular."',
    },
    {
      name: "María",
      image: person4,
      comment: '"Increíble experiencia con ReclamaSmart. Después de años de lidiar con reclamaciones de productos defectuosos, finalmente obtuve una compensación justa."',
    },
    {
      name: "Javier",
      image: person5,
      comment: '"ReclamaSmart superó mis expectativas. No solo recuperé mi dinero por un servicio insatisfactorio, sino que también me brindaron un excelente soporte durante todo el proceso."',
    },
    {
      name: "Sofía",
      image: person6,
      comment: '"Recomendaría ReclamaSmart a cualquiera que busque una forma efectiva de resolver problemas con empresas."',
    },
  ];
>>>>>>> c183139645b350ec5e7aedaadf731672a39c1e1e

export default function Cases() {
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
                  <h6>⭐⭐⭐⭐⭐</h6>
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
