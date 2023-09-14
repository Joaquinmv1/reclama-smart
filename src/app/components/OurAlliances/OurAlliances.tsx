'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import partner2 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (2).svg';
import partner3 from '../../../assets/images/alliances/WARNI-Sin fondo 1 (3).svg';
import partner4 from '../../../assets/images/alliances/WARNI-Sin fondo 1.svg';
import partner5 from '../../../assets/images/alliances/image 53 (1).svg';
import partner6 from '../../../assets/images/alliances/image 53 (2).svg';
import partner1 from '../../../assets/images/alliances/image-removebg 1.svg';
import style from './OurAlliances.module.css';

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
    <section className={style.container}>
      <div className={style.partersTitle}>
        <h2 className={style.h2}>Nuestros aliados</h2>
      </div>
      <section ref={ref} className={style.containerSlide}>
        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <Link href={'alliances?alliance=InnovaUlima'}>
            <div>
              <Image src={partner2} alt={'partner'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=ParlamentoAndino'}>
            <div>
              <Image src={partner3} alt={'Parlamento Andino'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=ProgramaUsil'}>
            <div>
              <Image src={partner6} alt={'utec'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=Warmiventures'}>
            <div>
              <Image src={partner4} alt={'Warmiventures'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=CamaraDeComercio'}>
            <div>
              <Image src={partner5} alt={'partner'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=utec'}>
            <div>
              <Image src={partner1} alt={'partner'} />
            </div>
          </Link>
        </article>

        <article className={`${style.logosSlide} ${isObserver ? '' : style.noAnimation}`}>
          <div>
            <Link href={'alliances?alliance=InnovaUlima'}>
              <Image src={partner2} alt={'partner'} />
            </Link>
          </div>
          <Link href={'alliances?alliance=ParlamentoAndino'}>
            <div>
              <Image src={partner3} alt={'partner'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=InnovaUlima'}>
            <div>
              <Image src={partner6} alt={'utec'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=Warmiventures'}>
            <div>
              <Image src={partner4} alt={'partner'} />
            </div>
          </Link>
          <Link href={''}>
            <div>
              <Image src={partner5} alt={'partner'} />
            </div>
          </Link>
          <Link href={'alliances?alliance=ProgramaUsil'}>
            <div>
              <Image src={partner1} alt={'partner'} />
            </div>
          </Link>
          {/* <div>
            <Image src={partner7} alt={'partner'} />
          </div> */}
        </article>
      </section>
    </section>
  )
}

export default OurAlliances;