import styles from './Footer.module.css'
import Image from 'next/image'
import img1 from 'src/assets/images/logo-face.svg'
import img2 from 'src/assets/images/logo-insta.svg'
import img3 from 'src/assets/images/logo-tik.svg'
import img4 from 'src/assets/images/logo-wp.svg'
import logo from 'src/assets/images/logo-reclama-smart.svg'
import Button from '../Button/Button'
import Link from 'next/link'

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

  const redes = [
    {
      img: img1,
      link: ""

    }, {

      img: img2,
      link: "https://www.instagram.com/reclamaqui.pe/"
    },
    {
      img: img3,
      link: "https://www.tiktok.com/@reclamaqui.pe?_t=8ao4mz66gfk&_r=1"

    }, {
      img: img4,
      link: "https://api.whatsapp.com/send?phone=+51932468027&text=¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Reclamaqu%C3%AD."
    }

  ]
  return (
    <footer className={styles.footer}>
      <section className={styles.containerFooter}>

        <article className={styles.featuresSection}>
          <div className={styles.information}>

            <Pharagraph text={"Términos y condiciones"} />
            <Pharagraph text={"Política y privacidad"} />
            <Pharagraph text={"Libro de reclamaciones"} />

          </div>

        </article>


        <article className={styles.contactSection}>

          <div className={styles.infoContactSection}>

            <Image src={logo} alt="logo" width={200} height={50} />
            <Pharagraph text={"info@reclameaqui.pe"} className={`${styles.text} ${styles.underline} ${styles.hover}`} />
            <Link href={redes[3].link}>
              <Pharagraph text={"+ 51 932 468 027"} className={`${styles.text} ${styles.underline} ${styles.hover}`} />
            </Link>

          </div>

          <div className={styles.containerRedes}>

            <div className={styles.redes}>
              {
                redes.map((red, i) => <Link className={styles.hover} target='_blank' key={`${red} ${i}`} href={red.link}> <Image src={red.img} alt="logo-red" width={20} height={20} /></Link>)
              }
            </div>
            <Link href={redes[3].link}>

              <Button title='Consulta gratis' className={styles.button} />
            </Link>
          </div>

        </article>

      </section>
      <p className={styles.copyright}>Copyright © Reclamaquí 2023 - Todos los derechos reservados</p>
    </footer>
  )
}