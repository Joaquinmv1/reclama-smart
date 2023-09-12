import Image from "next/image";
import banner from '../../../../assets/images/blog/Frame 427319231.jpg';
import style from './BannerBlog.module.css';
import Arrow from "./Icon";
import Link from "next/link";

export default function BannerBlog() {
  return (
    <>
      <section className={style.containerBlog}>
        <h2>Novedades <span>smart</span></h2>
        <article className={style.infoBlog}>
          <Image src={banner} alt="Banner Blog" />
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