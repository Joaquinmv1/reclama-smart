import { Card } from "@/app/models";
import Image from "next/image";
import Link from "next/link";

interface Props {
  card: Card;
}

function FeacturedServiceCard({ card }: Props) {
  return (
    <>
      <Link href="/ourServices">
        <li>
          <Image src={card.image} alt={`${card.title} services`} />
          <p>{card.title}</p>
        </li>
      </Link>
    </>
  );
}

export default FeacturedServiceCard;
