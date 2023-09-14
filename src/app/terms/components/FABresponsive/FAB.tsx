import { useState } from "react"
import style from './FAB.module.css'

export default function FAB() {

    const [open, setOpen] = useState(false)

    const toggleFab = () => {
        setOpen(!open)
    }
    return (
        <aside className={style.navGeneral}>
            <h2></h2>
        </aside>
    )
}