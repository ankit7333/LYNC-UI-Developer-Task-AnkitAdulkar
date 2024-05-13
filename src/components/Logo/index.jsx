import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
export default function Logo() {
    return (
        <div className={styles.logo}>
            <NavLink to="/">
                <img src="/image/logo.svg" alt="logo" />
            </NavLink>
        </div>
    )
}
