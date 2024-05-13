import styles from './styles.module.scss'
export default function Title({title, colortitle, breakElement, sdk}) {
    return (
            <div className={`${sdk ? styles.title__sdk : styles.title} fw700`}>{title} <span className={breakElement ? `dblock` : ''}>{colortitle}</span></div>
    )
}
