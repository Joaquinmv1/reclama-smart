import style from './about.module.css'
import Banner from './components/Banner/BannerAbout'
import { Team } from './components/Team'

export default function About() {
    return (
        <section className={style.aboutContainer}>
            <Banner />
            <Team />
        </section>
    )
}