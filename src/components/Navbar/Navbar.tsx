'use client';
import { routes } from "@/assets/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../assets/images/LOGO.svg';
import what from '../../assets/images/whatsapp.svg';
import style from './navbar.module.css';
import { Route } from "@/app/models";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Inicio');

  const activeClick = (route: Route) => {
    setActiveLink(route);
  };

  return (
    <header className={style.containerNavbar}>
      <Image width={250} height={30} alt="logo" src={logo} />
      <nav>
        <ul className={style.links}>
          {routes.map(({ route, name }) => {
            const classNames = activeLink === name ? style.activeLink : '';
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