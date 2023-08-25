'use client';

import style from './OurAlliances.module.css';
import partner from '../../../assets/images/image 53.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

function OurAlliances() {
  const [isObserver, setIsObserver] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((([entry]) => {
      if (entry.isIntersecting) setIsObserver(entry.isIntersecting);
    }), options);

    const elementToObserve = ref.current;
    if (elementToObserve) observer.observe(elementToObserve);

    return () => {
      if (elementToObserve) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className={style.partersTitle}>
        <h2 className={style.h2}>Nuestros Partners</h2>
      </div>
      <section ref={ref} className={style.containerSlide}>
        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
        </article>

        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
          <Image src={partner} alt={'partner'} />
        </article>
      </section>
    </>
  )
}
export default OurAlliances