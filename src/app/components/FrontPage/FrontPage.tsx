import style from './FrontPage.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import imgBanner from '../../../assets/images/banner.jpg'
export default function FrontPage() {
	return (
		<section className={style.frontContainer}>
			<div className={style.bannerDescrip}>
				<h1 className={style.title}>Recuperamos <br/><span style={{color:'#FF5220'}}>tu dinero</span></h1>
				<h4 className={style.subTitle}>Resolvemos tus reclamos<br/> de manera rápida y sencilla</h4>
				<h5 className={style.h5}>¿Quieres descubrir si tu reclamo será exitoso?</h5>
				<Button title='Consulta Gratis' className={style.button} />
			</div>
			<div className={style.banner}>
				<Image width={600} alt='banner' src={imgBanner} />
			</div>
		</section>
	)
}