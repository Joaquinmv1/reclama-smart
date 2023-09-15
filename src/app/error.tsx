'use client'
import Image from 'next/image';
import style from './page.module.css';
import errorImg from '../assets/images/Error.jpg'
import Link from 'next/link';

const GlobalError = ({ error, reset }: { error: Error, reset: () => void }) => {
  return <div className={style.errorContent}>
    <div className={style.error}>
      <Image src={errorImg} alt='Error image'/>
      <h2>Pagina no encontrada (Error 404)</h2>
    </div>
    <p>reclama <span> smart</span></p>
    <Link href={'/'} className={style.errorBtn}>Volver al inicio de reclama smart</Link>
  </div>
}

export default GlobalError;