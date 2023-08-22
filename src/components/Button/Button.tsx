import style from './button.module.css'
interface Props {
    title: string;
    className: string
}

export default function Button({ title, className }: Props) {
    return (
        <button className={className}>{title}</button>
    )
}
