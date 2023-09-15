import Image from "next/image";
import style from './BannerBlog.module.css';
import Arrow from "./Icon";
import Link from "next/link";
import date from '../../../../assets/images/blog/blogDate.svg'

export default function BannerBlog() {
  return (
    <>
      <section className={style.containerBlog}>
        <h2>Novedades <span>smart</span></h2>
        <section className={style.bannerImg}>
          <div className={style.dateBlog}><Image alt="date blog" src={date}/></div>
          <div className={style.bannerSubtitle}><p>Tus derechos fundamentales como consumidor ¿Los conoces?</p></div>
        </section>
        <article className={style.infoBlog}>
          <p>No se puede subestimar la importancia de los derechos de los consumidores. Nuestra experiencia demuestra que a menudo surgen problemas cuando se vulnera uno de estos tres derechos. Por ello, nos gustaría explicarles brevemente, ¿qué derechos tenemos realmente como consumidores?</p>
        </article>
        <div className={style.btnContainer}>
          <Link href={'/blog/blogContent?blog=consumer-rights'}>
            <button className={style.btnBlog}>Leer Árticulo Completo <Arrow /></button>
          </Link>
        </div>
      </section>
    </>
  )
}