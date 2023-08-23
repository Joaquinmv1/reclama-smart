'use client'
import Link from "next/link"
import Image from "next/image"
import style from './navbar.module.css'
import logo from '../../assets/images/LOGO.svg'
import what from '../../assets/images/whatsapp.svg'
import React, { useState } from "react"
import { routes } from "@/assets/constants/constants"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('inicio');

  const activeClick = (route: string) => {
    setActiveLink(route);
  };

  return (
    <header className={style.containerNavbar}>
      <Image width={250} height={30} alt="logo" src={logo} />
      <nav>
        <ul className={style.links}>
          {routes.map(({ route, name }) => {
            const classNames = activeLink === name ? style.activeLink : ''
            return (
              <li key={name} className={classNames} >
                <Link onClick={() => activeClick(name)} className={style.link} href={route}>{name}</Link>
              </li>
            )
          })}
          <button className={style.button}>
            <Image alt="whatsapp" src={what} width={36} height={36} />
            Chatear
          </button>
        </ul>
      </nav>
    </header>
  )
}