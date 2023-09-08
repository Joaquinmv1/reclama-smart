import style from './FrontPage.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import imgBanner from '../../../assets/images/fotoBanner3.png';

export default function FrontPage() {
	return (
		<section className={style.frontContainer}>
			<div className={style.bannerDescrip}>
				<h1 className={style.title}>Recuperamos <br /><span style={{ color: '#FF5220' }}>tu dinero</span></h1>
				<h4 className={style.subTitle}>Estamos para ayudarte a resolver tus reclamos de forma rápida y eficaz</h4>
				<h5 className={style.h5}>¿Quieres descubrir si tu reclamo será exitoso?</h5>
				<h5 className={style.h5mobile}>¿Estás interesado en saber si tu reclamo tendrá éxito?</h5>
				<Button title='Consulta Gratis' className={style.button} />
			</div>
			<div className={style.bannerImage}>
				<Image className={style.image} src={imgBanner} alt='banner' />
			</div>
		</section>
	)
}