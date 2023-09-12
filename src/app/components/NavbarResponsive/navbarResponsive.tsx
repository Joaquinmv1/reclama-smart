'use client';
import { iconRoute, routes } from '@/assets/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Route } from "@/app/models"
import { useState } from 'react';
import style from './navbarResponsive.module.css';
import what from '../../../assets/images/whatsapp.svg'
import { usePathname } from 'next/navigation';

export default function NavbarResponsive() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() as Route;
  const [activeLink, setActiveLink] = useState(pathname);

  const activeClick = (route: Route) => {
    setActiveLink(route);
  };

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
            const classNames = activeLink === route ? style.activeLink : '';
            return (
              <div className={style.linkContainer} key={name}>
                <Link className={classNames} onClick={() => activeClick(route)} href={route}><li className={style.li} onClick={handleLinkClick} ><Image className={style.icono} width={22} height={22} alt='icon' src={icon} />{name}</li></Link>
              </div>
            )
          })}
          <article className={style.contanerButton}>
            <button className={style.button}>
              <Image className={style.whatsapp} alt="whatsapp" src={what} width={36} height={36} />
              Chatear
            </button>
          </article>
        </ul>
      </section>
    </>
  )
}