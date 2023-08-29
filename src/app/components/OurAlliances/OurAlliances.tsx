'use client';

import style from './OurAlliances.module.css';
import partner from '../../../assets/images/image 53.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import card1 from '../../../assets/images/alliances/card1.png'
import card2 from '../../../assets/images/alliances/card2.png'
import card3 from '../../../assets/images/alliances/card3.png'
import card4 from '../../../assets/images/alliances/card4.png'
import partner1 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (1).svg'
import partner2 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (2).svg'
import partner3 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (3).svg'
import partner4 from '../../../assets/images/alliances/WARNI-Sin fondo 1.svg'


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
          <Image src={partner1} alt={'partner'} />
          <Image src={partner2} alt={'partner'} />
          <Image src={partner3} alt={'partner'} />
          <Image src={partner4} alt={'partner'} />
          <Image src={partner1} alt={'partner'} />
          <Image src={partner2} alt={'partner'} />
        </article>

        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <Image src={partner1} alt={'partner'} />
          <Image src={partner2} alt={'partner'} />
          <Image src={partner3} alt={'partner'} />
          <Image src={partner4} alt={'partner'} />
          <Image src={partner1} alt={'partner'} />
          <Image src={partner2} alt={'partner'} />
        </article>
      </section>
      
      <div className={style.partersTitle}>
        <h2 className={style.h2}>Nuestros Partners</h2>
      </div>
      <section style={{ display: 'flex', gap: '30px', margin: '2rem auto', justifyContent: 'center' }}>
        <Image src={card1} alt='' />
        <Image src={card2} alt='' />
        <Image src={card3} alt='' />
        <Image src={card4} alt='' />
      </section>
    </>
  )
}

export default OurAlliances;