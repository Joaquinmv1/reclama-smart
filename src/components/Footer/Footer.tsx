import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'
import img1 from 'src/assets/images/logo-face.svg'
import img2 from 'src/assets/images/logo-insta.svg'
import img3 from 'src/assets/images/logo-tik.svg'
import img4 from 'src/assets/images/logo-wp.svg'
import logo from 'src/assets/images/logo-reclama-smart.svg'


export default function Footer() {

  const redes = [
    img1,
    img2,
    img3,
    img4
  ]
  return (
    <footer className={styles.footer}>

      <section className={styles.featuresSection}>
        <div className={styles.information}>

          <p>Términos y condiciones</p>
          <p>Política y privacidad</p>
          <p>Libro de reclamaciones</p>
        </div>

        <p>Copyright © Reclamaquí 2023 - Todos los derechos reservados</p>
      </section>


      <section className={styles.contactSection}>

        <Image src={logo} alt="logo" width={200} height={50} />
        <p>info@reclameaqui.pe</p>
        <p>+ 51 932 468 027</p>
        <div className={styles.redes}>
          {
            redes.map((red) => <Image key={red} src={red} alt="logo-red" width={20} height={20} />)
          }
        </div>

        <Link href={'/'} className='button'>Consulta aqui</Link>
      </section>
    </footer>
  )
}