import { Card } from '@/app/models/card.model';
import Image from 'next/image';

interface Props {
  card: Card;
}

function FeacturedServiceCard({ card }: Props) {
  return (
    <>
      <li >
        <Image src={card.image} alt={`${card.title} services`} />
        <p>{card.title}</p>
      </li>
    </>
  )
};

export default FeacturedServiceCard;