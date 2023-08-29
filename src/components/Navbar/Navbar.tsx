'use client'
import NavbarResponsive from "@/app/components/NavbarResponsive/navbarResponsive"
import { Route } from "@/app/models"
import { routes } from "@/assets/constants/constants"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import logo from '../../assets/images/LOGO.svg'
import what from '../../assets/images/whatsapp.svg'
import style from './navbar.module.css'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<Route>('Inicio')


  const activeClick = (route: Route) => {
    setActiveLink(route);
    // const localStorage = window.localStorage.setItem('route', route);
    // console.log(localStorage);
  };

  useEffect(() => {
    let activeClicks = localStorage.getItem('activeLinks')
    if(activeClicks) {
      setActiveLink(activeClicks as Route)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('activeLinks', activeLink)
  }, [activeLink])
  
  return (
    <header className={style.containerNavbar}>
      <NavbarResponsive />
      <Image className={style.logo} width={250} height={30} alt="logo" src={logo} />
      <nav className={style.navB}>
        <ul className={style.links}>
          {routes.map(({ route, name }) => {
            const classNames = activeLink === name ? style.activeLink : '';
            return (
              <li key={name} className={classNames} >
                <Link onClick={() => activeClick(name)} className={style.link} href={route}>{name}</Link>
              </li>
            )
          })}
        </ul>
        <button className={style.button}>
          <Image className={style.whatsapp} alt="whatsapp" src={what} width={36} height={36} />
          Chatear
        </button>
      </nav>
    </header>
  )
}