import { DateIcon, RightsIcon } from "../Icons/Icons";
import style from './Date.module.css';

export const Date = ({ date }: { date: string }) => {
  return (
    <>
      <article className={style.containerDate}>
        <span><DateIcon /> {date}</span>
        <span><RightsIcon /> Derechos</span>
      </article>
    </>
  )
}