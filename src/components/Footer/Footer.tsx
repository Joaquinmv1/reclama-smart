import styles from './Footer.module.css'
import Image from 'next/image'
import img1 from 'src/assets/images/logo-face.svg'
import img2 from 'src/assets/images/logo-insta.svg'
import img3 from 'src/assets/images/logo-tik.svg'
import img4 from 'src/assets/images/logo-wp.svg'
import logo from 'src/assets/images/logo-reclama-smart.svg'
import Button from '../Button/Button'
import Link from 'next/link'

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
      link: ""

    }, {
      img: img4,
      link: "https://api.whatsapp.com/send?phone=+51932468027&text=¨¡Hola!%20Quiero%20saber%20m%C3%A1s%20sobre%20Reclamaqu%C3%AD."
    }

  ]
  return (
    <footer className={styles.footer}>
      <section className={styles.containerFooter}>

        <article className={styles.featuresSection}>
          <div className={styles.information}>

            <p className={styles.text}>Términos y condiciones</p>
            <p className={styles.text}>Política y privacidad</p>
            <p className={styles.text}>Libro de reclamaciones</p>
          </div>

        </article>


        <article className={styles.contactSection}>

          <div className={styles.infoContactSection}>

            <Image src={logo} alt="logo" width={200} height={50} />
            <p className={styles.text}>info@reclameaqui.pe</p>
            <p className={styles.text}>+ 51 932 468 027</p>
          </div>

          <div className={styles.containerRedes}>

            <div className={styles.redes}>
              {
                redes.map((red, i) => <Link key={`${red} ${i}`} href={red.link}> <Image src={red.img} alt="logo-red" width={20} height={20} /></Link>)
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