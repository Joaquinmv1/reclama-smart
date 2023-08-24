import style from './feacturedService.module.css';
import Button from '@/components/Button/Button';
import { cardsServices } from '@/assets/constants/constants';
import { FeacturedServiceCard } from '.';

const FeacturedService = () => {
  return (
    <>
      <section className={style['container-feacturedService']}>
        <article className={style['container-aboutServices']}>
          <h2 className={style.titleServices}>Servicios destacados</h2>
          <p className={style.pServices}>
            Somos especialistas legales en reclamos, dedicados a recuperar tu dinero de manera efectiva.
            <span className={style.aboutServicesSpan}> Deja en nuestras manos la tarea de recuperar lo que te corresponde</span>
          </p>
        </article>
        <ul className={style.cardContainer}>
          {cardsServices.map((card, i) => (
            <FeacturedServiceCard key={`${card.title}${i}`} card={card} />
          ))}
        </ul>
        <Button className={style.buttonService} title='Más Servicios' />
      </section>
    </>
  )
}

export default FeacturedService;