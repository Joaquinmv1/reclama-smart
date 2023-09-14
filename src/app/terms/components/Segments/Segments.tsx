import { useState } from "react";
import style from "./Segments.module.css";
import { terms } from "@/assets/constants/constants";
import arrow from "../../../../assets/images/chevron-up.png";
import Image from "next/image";

export default function Segments() {
    const [open, setOpen] = useState<number>();

    const handleOpen = (index: number) => {
        const isOpen = index == open ? index : open;
        setOpen(isOpen);
    }

    return (
        <section className={style.containerGeneral}>
            {
                terms.map((term, index) => (
                    <div className={style.container} key={term.title}>
                        <div className={style.title} onClick={() => handleOpen(index)}>
                            {
                                term.segment ? <Image src={arrow} alt="arrow" className={`${style.arrow} ${open === index ? style.rotated : ""}`} /> : <small className={style.margin}></small>
                            }

                            <h3>{term.title}</h3>
                        </div>
                        {
                            open === index && (
                                <div className={`${style.segment} ${open === index ? style.open : ""}`}>
                                    {term.segment?.map((segment, index) => (
                                        <p key={index}>{segment}</p>
                                    ))}

                                </div>

                            )
                        }
                    </div>
                ))
            }

        </section>
    )
}