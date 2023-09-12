import style from './TitleAlliance.module.css';

function TitleAlliance({ title }: { title: string }) {
  return (
    <>
      <article className={style.containerTitle}>
        <h3 className={style.title}>{title}</h3>
      </article>
    </>
  )
}

export default TitleAlliance;