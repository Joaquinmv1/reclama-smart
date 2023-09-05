import style from '../BusinessInsight.module.css'

function Circle({ number }: { number: React.ReactNode }) {
  return (
    <>
      <article className={style.circle}>
        {number}
      </article>
    </>
  )
}

export default Circle;