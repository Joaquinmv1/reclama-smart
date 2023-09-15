import styles from './Footer.module.css'
import Image from 'next/image'
import logo from 'src/assets/images/logo-reclama-smart.svg'
import Button from '../Button/Button'
import Link from 'next/link'
import { redes } from '@/assets/constants/constants'

interface Props {
  text: string;
  className?: string;
};

const Pharagraph = ({ text, }: Props) => {
  return (
    <p className={styles.text}>{text}</p>
  )
}



export default function Footer() {


  return (
    <footer className={styles.footer}>
      <section className={styles.containerFooter}>

        <article className={styles.featuresSection}>

          <div className={styles.information}>

            <Link href={'/terms'} className={`${styles.text} ${styles.hover}`}>
              <Pharagraph text={"Términos y condiciones"} />
            </Link>
            <Link href={'/privacy'} className={`${styles.text} ${styles.hover}`}>
              <Pharagraph text={"Políticas de privacidad"} />
            </Link>
            <Link href={'/claims'} className={`${styles.text} ${styles.hover}`}>
              <Pharagraph text={"Libro de reclamaciones"} />
            </Link>
          </div>

        </article>


        <article className={styles.contactSection}>

          <div className={styles.infoContactSection}>

            <Image src={logo} alt="logo" className={styles.logo} />
            <Link
              href="mailto:mesadepartes.legal@reclamasmart.com.pe"
              target="_blank"
            >
              <Pharagraph text={"mesadepartes.legal@reclamasmart.com.pe"} />
            </Link>
            <Link href={redes[0].link} target='_blank' className={`${styles.text}  ${styles.hover}`}>
              <Pharagraph text={"+ 51 932 468 027"} />
            </Link>

          </div>

          <div className={styles.containerRedes}>
            <div className={styles.redes}>
              {
                redes.map((red, i) => <Link className={styles.hover} target='_blank' key={`${red} ${i}`} href={red.link}> <Image src={red.img} alt="logo-red" /></Link>)
              }
            </div>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20ReclamaSmart">
              <Button title='Consulta Gratis' className={styles.button} />
            </Link>
          </div>

        </article>

      </section>
      <p className={styles.copyright}>Copyright © reclama smart 2023 - Todos los derechos reservados</p>
    </footer>
  )
}