'use client'
import NavbarResponsive from "@/app/components/NavbarResponsive/navbarResponsive"
import { Route } from "@/app/models"
import { routes } from "@/assets/constants/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from '../../assets/images/LOGO.svg'
import what from '../../assets/images/whatsapp.svg'
import style from './navbar.module.css'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname() as Route;
  const [activeLink, setActiveLink] = useState<Route>(pathname);

  const activeClick = (route: Route) => {
    setActiveLink(route);
  };

  return (
    <header className={style.containerNavbar}>
      <NavbarResponsive />
      <Image className={style.logo} width={250} height={30} alt="logo" src={logo} />
      <nav className={style.navB}>
        <ul className={style.links}>
          {routes.map(({ route, name }) => {
            const classNames = activeLink === route ? style.activeLink : '';
            return (
              <li key={name} className={classNames}>
                <Link onClick={() => activeClick(route)} className={style.link} href={route}>{name}</Link>
              </li>
            )
          })}
        </ul>
        <button className={style.button}>
          <Image className={style.whatsapp} alt="whatsapp" src={what} width={36} height={36} />
          <Link href="https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20ReclamaSmart.">
            Chatear
          </Link>
        </button>
      </nav>
    </header>
  )
}