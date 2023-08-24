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
      setIsObserver(entry.isIntersecting);
      console.log('esta intersectando');
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