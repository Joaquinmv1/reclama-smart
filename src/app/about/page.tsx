import style from './about.module.css'
import Banner from './components/Banner/BannerAbout'
import Founders from './components/Founders/Founders'


export default function About(){
    return(
        <section className={style.aboutContainer}>
            <Banner/>
            <Founders/>
        </section>
    )
}