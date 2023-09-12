import { DateIcon } from '@/app/blog/components/Icons/Icons';
import style from './DateAlliance.module.css';

type About =
  | 'Conferencista'
  | 'Concurso de Emprendimiento Social'
  | 'Entrevista'
  | 'Participación'
  | 'Webinar “Introducción al derecho del consumidor para Empresarios”'

interface Props {
  date: string;
  about: About;
}

function DateAlliance({ date, about }: Props) {
  return (
    <>
      <article className={style.containerDate}>
        <span><DateIcon /> {date}</span>
        <span>{about}</span>
      </article>
    </>
  )
}

export default DateAlliance;