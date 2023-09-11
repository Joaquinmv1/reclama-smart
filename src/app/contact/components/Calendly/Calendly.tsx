"use client"
import { PopupButton } from 'react-calendly';
import style from './Calendly.module.css';
import { useEffect, useRef } from 'react';


const Calendly: React.FC = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const element = elementRef.current;
        if (!element) {
            console.error('Error: no se encontro el elemento con id');
            return;
        }
    }, []);


    return (
        <div id='pup' className="popup-widget" ref={elementRef}>

            <PopupButton
                url="https://calendly.com/frankyanez9413/reunion-15-min"
                rootElement={elementRef.current as HTMLElement}
                text="Agendar Reunion"
                className={style.button}
            />

        </div>
    );
};

export default Calendly;