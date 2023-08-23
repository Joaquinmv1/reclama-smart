import Image from 'next/image';
import styles from './Partners.module.css';

export default function Partners() {
  const url = ''
  return (
    <section>
      <h2 className={styles.title}>Nuestros partners</h2>
      <div className={styles.partner}>
        <Image src={url} alt="" width={20} height={20} />
        <Image src={url} alt="" width={20} height={20} />
        <Image src={url} alt="" width={20} height={20} />
        <Image src={url} alt="" width={20} height={20} />
        <Image src={url} alt="" width={20} height={20} />
      </div>
    </section>
  )
}

