import Link from 'next/link'
import style from './page.module.css';
import img from '../assets/images/Error.jpg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={style.errorContent}>
      <div className={style.error}>
        <Image src={img} alt='Error image' />
        <h2>Pagina no encontrada (Error 404)</h2>
      </div>
      <p>reclama <span> smart</span></p>
      <Link href={'/'} className={style.errorBtn}>Volver al inicio de reclama smart</Link>
    </div>
  )
}