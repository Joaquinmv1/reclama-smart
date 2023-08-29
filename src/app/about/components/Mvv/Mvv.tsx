import style from './Mvv.module.css';
import { mvvData } from '@/assets/constants/constants';
import MvvCard from './MvvCard/MvvCard';

function Mvv() {
  return (
    <>
      <section className={style['mvv-Container']}>
        <h2 className={style.mvvTitle}>
          Descubre la <span>MISIÓN</span> que guía nuestra empresa, la <span>VISIÓN</span> que nos impulsa y los <span>VALORES</span> que nos fortalecen
        </h2>
        <ul className={style['mvv-card']}>
          {mvvData.map((card, i) => {
            return <MvvCard key={`${card.title} ${i}`} card={card} />
          })}
        </ul>
      </section>
    </>
  )
}

export default Mvv;