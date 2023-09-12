'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import partner1 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (1).svg';
import partner2 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (2).svg';
import partner3 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (3).svg';
import partner4 from '../../../assets/images/alliances/WARNI-Sin fondo 1.svg';
import partner5 from '../../../assets/images/alliances/image 53 (1).svg';
import partner6 from '../../../assets/images/alliances/image 53 (2).svg';
import partner7 from '../../../assets/images/alliances/image 53.svg';
import style from './OurAlliances.module.css';
import Link from 'next/link';

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
        <h2 className={style.h2}>Somos <span style={{ color: "#FF5220" }}>smart</span></h2>
      </div>
      <section ref={ref} className={style.containerSlide}>
        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <div>
            <Link href={'alliances?alliance=InnovaUlima'}>
              <Image src={partner1} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Link href={'alliances?alliance=InnovaUlima'}>
              <Image src={partner2} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Link href={'alliances?alliance=ParlamentoAndino'}>
              <Image src={partner3} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Link href={'alliances?alliance=Warmiventures'}>
              <Image src={partner4} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Image src={partner5} alt={'partner'} />
          </div>
          <div>
            <Link href={'alliances?alliance=ProgramaUsil'}>
              <Image src={partner6} alt={'partner'} />
            </Link>
          </div> <div>
            <Image src={partner7} alt={'partner'} />
          </div>
        </article>

        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <div>
            <Image src={partner1} alt={'partner'} />
          </div>
          <div>
            <Link href={'alliances?alliance=InnovaUlima'}>
              <Image src={partner2} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Link href={'alliances?alliance=ParlamentoAndino'}>
              <Image src={partner3} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Link href={'alliances?alliance=Warmiventures'}>
              <Image src={partner4} alt={'partner'} />
            </Link>
          </div>
          <div>
            <Image src={partner5} alt={'partner'} />
          </div>
          <div>
            <Link href={'alliances?alliance=ProgramaUsil'}>
              <Image src={partner6} alt={'partner'} />
            </Link>
          </div> 
          <div>
            <Image src={partner7} alt={'partner'} />
          </div>
        </article>
      </section>
    </>
  )
}

export default OurAlliances;