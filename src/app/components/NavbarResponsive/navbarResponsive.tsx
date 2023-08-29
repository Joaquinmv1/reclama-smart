'use client';
import { iconRoute, routes } from '@/assets/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './navbarResponsive.module.css';

export default function NavbarResponsive() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button className={style.navbarMenuButton} onClick={() => setMenuOpen(!menuOpen)} >
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </button>
      <section className={`${style.navbarResponsive} ${menuOpen ? style.navbarOpen : style.navbarClosed}`}>
        <ul className={style.ul}>
          {routes.map(({ route, name }, index) => {
            const { icon } = iconRoute[index];
            return (
              <div className={style.linkContainer} key={name}>
                <Link href={route}><li className={style.li} onClick={handleLinkClick} ><Image className={style.icono} width={18} height={18} alt='icon' src={icon} />{name}</li></Link>
              </div>
            )
          })}
        </ul>
      </section>
    </>
  )
}