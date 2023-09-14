import style from './FrontPage.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import imgBanner from '../../../assets/images/ImgBannerHome.png';
import logo from '../../../assets/images/LOGO.svg'

export default function FrontPage() {
	return (
		<section className={style.frontContainer}>
			<article className={style.bannerDescrip}>
				<Image className={style.logo} alt="logo" src={logo} />
				<h1 className={style.title}>Recuperar tu plata nunca fue tan fácil </h1>
				<Button title='Consulta Gratis' className={style.button} />
			</article>
			<picture className={style.bannerImage}>
				<Image className={style.image} src={imgBanner} alt='banner' />
			</picture>
		</section>
	)
}