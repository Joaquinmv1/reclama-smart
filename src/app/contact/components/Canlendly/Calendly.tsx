'use client'
import React, { useEffect, useRef } from 'react';
import { PopupButton } from 'react-calendly';
import style from './Calendly.module.css';

const Calendly: React.FC = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);


    return (
        <div id='pup' className={style.popupWidget} ref={elementRef}>
            {elementRef && <PopupButton
                url="https://calendly.com/frankyanez9413/reunion-15-min"
                rootElement={elementRef.current as HTMLElement}
                text="Agendar Reunion"
                className={style.button}
            />}
        </div>
    );
};

export default Calendly;