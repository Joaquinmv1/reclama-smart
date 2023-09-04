import { Card } from "@/app/models/card.model";
import Image from "next/image";
import { Circle } from "..";

interface Props {
  card: Card;
  index: number;
}

function BusinessInsightCard({ card, index }: Props) {
  console.log(index);
  

  return (
    <>
      <li key={card.title}>
        <Circle number={index} />
        <Image src={card.image} alt={`business card`} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </li>
    </>
  )
}

export default BusinessInsightCard;