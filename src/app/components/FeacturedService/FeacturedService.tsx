import Image from 'next/image';
import style from './feacturedService.module.css';
import Button from '@/components/Button/Button';
import { cardsServices } from '@/assets/constants/constants';

const FeacturedService = () => {
  return (
    <>
      <section className={style['container-feacturedService']}>
        <article className={style['container-aboutServices']}>
          <h3 className={style.titleServices}>Servicios destacados</h3>
          <p className={style.pServices}>
            Somos especialistas legales en reclamos, dedicados a recuperar tu dinero de manera efectiva.
            <span className={style.aboutServicesSpan}> Deja en nuestras manos la tarea de recuperar lo que te corresponde</span>
          </p>
        </article>
        <ul className={style.cardContainer}>
          {cardsServices.map((card, i) => (
            <li key={`${card.title}${i}`}>
              <Image src={card.icon} alt={`${card.title} services`} />
              <p>{card.title}</p>
            </li>
          ))}
        </ul>
        <Button className={style.buttonService} title='Más Servicios' />
      </section>
    </>
  )
}

export default FeacturedService;