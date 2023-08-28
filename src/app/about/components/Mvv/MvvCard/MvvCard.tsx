import { Card } from "@/app/models";
import Image from 'next/image';

interface Props {
  card: Card;
}

function MvvCard({ card }: Props) {
  return (
    <>
      <li>
        <Image src={card.image} alt={`mmv ${card.title}`} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </li>
    </>
  )
}

export default MvvCard;