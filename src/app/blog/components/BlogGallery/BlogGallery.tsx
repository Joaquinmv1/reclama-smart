import Image from 'next/image';
import style from './BlogGallery.module.css';
import images from '../../../../assets/images/blog/index';
import Link from 'next/link';

function BlogGallery() {
  return (
    <>
      <section className={style.galleryContainer}>
        <div className={style.data}>
          <article className={style.dataContent}>
            <Image src={images.programadorImage} alt='image 1' />
            <Link className={style.link} href='/blog/blogContent?blog=cybercrime-scams'>
              <h4>Tus derechos fundamentales como consumidor ¿Los Conoces?</h4>
            </Link>
            <p>06/09/2023</p>
          </article>
          <article>
            <Image src={images.vistaFrontal} alt='image 3' />
            <Link className={style.link} href='/blog/blogContent?blog=entrepreneurial-complaints'>
              <h4>¿Los empresarios pueden denunciar a INDECOPI?</h4>
            </Link>
            <p>10/08/2023</p>
          </article>
        </div>
        <div className={style.data}>
          <article>
            <Image src={images.ladrones} alt='image 2' />
            <Link className={style.link} href='/blog/blogContent?blog=consumer-protection'>
              <h4>Protege tus finanzas: 3 medidas antifraude bancario</h4>
            </Link>
            <p>05/04/2024</p>
          </article>
          <article>
            <Image src={images.vistaPosterior} alt='image 4' />
            <Link className={style.link} href={'/blog/blogContent?blog=air-travel-rights'}>
              <h4>Descubre tus derechos al viajar en avión</h4>
            </Link>
            <p>05/07/2023</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default BlogGallery;