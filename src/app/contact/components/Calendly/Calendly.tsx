
import { PopupButton } from 'react-calendly';
import style from './Calendly.module.css';


const Calendly = () => {
    const element = document.getElementById('calend');
    console.log(element);

    return (
        <div id='pup' className="popup-widget">

            <PopupButton
                url="https://calendly.com/frankyanez9413/reunin-15-min"
                rootElement={element as HTMLElement}
                text="Agendar Reunion"
                className={style.button}
            />

        </div>
    );
};

export default Calendly;