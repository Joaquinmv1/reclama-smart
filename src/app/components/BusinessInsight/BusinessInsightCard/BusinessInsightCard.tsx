import { Card } from "@/app/models/card.model";
import Image from "next/image";

interface Props {
  card: Card;
}



function BusinessInsightCard({ card }: Props) {

  return (
    <>
      <li key={card.title}>
        <Image src={card.image} alt={`business card`} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </li>
    </>
  )
}

export default BusinessInsightCard;