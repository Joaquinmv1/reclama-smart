import { Card } from "@/app/models";
import Image from 'next/image';
import style from '../Mvv.module.css';

interface Props {
  card: Card;
}

function MvvCard({ card }: Props) {
  return (
    <>
      <li>
        <div className={style.infoContainer}>
          <Image src={card.image} alt={`mmv ${card.title}`} />
          <h3>{card.title}</h3>
        </div>
        <div className={style.containerp}>
          <p>{card.description}</p>
        </div>
      </li>
    </>
  )
}

export default MvvCard;