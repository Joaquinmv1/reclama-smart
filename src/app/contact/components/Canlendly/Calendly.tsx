'use client'
import React, { useEffect, useRef, useState } from 'react';
import { PopupButton } from 'react-calendly';
import style from './Calendly.module.css';

const Calendly: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) setIsVisible(true);
  }, [])

  return (
    <div id='pup' className={style.popupWidget} ref={elementRef}>
      {isVisible && <PopupButton
        url="https://calendly.com/reclamasmart/15_min"
        rootElement={elementRef.current as HTMLElement}
        text="Agendar Reunión"
        className={style.button}
      />}
    </div>
  );
};

export default Calendly;