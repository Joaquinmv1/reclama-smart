import style from './navbarResponsive.module.css'
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../assets/images/LOGO.svg'
import { routes, iconRoute } from '@/assets/constants/constants';
import Link from 'next/link';
export default function NavbarResponsive() {
    const [menuOpen, setMenuOpen] = useState(true);


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
                <section className={style.imgContain}>
                    <Image width={150} alt='logo' src={logo} className={style.img} />
                </section>
                <ul className={style.ul}>
                    {routes.map(({ route, name }, index) => {
                        const { icon } = iconRoute[index];
                        return (
                            <div className={style.linkContainer} key={name}>
                            <Link  href={route}><li className={style.li} onClick={handleLinkClick} ><Image className={style.icono} width={18} height={18} alt='icon' src={icon} />{name}</li></Link>
                            </div>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}