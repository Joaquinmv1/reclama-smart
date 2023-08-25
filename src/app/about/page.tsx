import style from './about.module.css'
import Banner from './components/Banner/BannerAbout'

export default function About(){
    return(
        <section className={style.aboutContainer}>
            <Banner/>
        </section>
    )
}