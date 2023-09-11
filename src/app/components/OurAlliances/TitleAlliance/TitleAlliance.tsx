import style from './TitleAlliance.module.css';

function TitleAlliance({ title }: { title: string }) {
  return (
    <>
      <section className={style.title}>
        {title}
      </section>
    </>
  )
}

export default TitleAlliance;