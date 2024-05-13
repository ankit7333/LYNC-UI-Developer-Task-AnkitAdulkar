import styles from './styles.module.scss'
import Logo from '../Logo'
import Nav from '../Nav'
import Button from '../Button'
export default function Header() {
    return (
        <div className={styles.header__bg}>
            <header className={styles.header}>
                <div className={styles.header__left}>
                    <Nav />
                    <Logo />
                </div>
                <div className={styles.header__right}>
                    <Button type={`button button--white fw600`}>
                        <span className={`button--text`}>Get started</span>
                        <span className={`icon icon--rightblack`} />
                    </Button>
                </div>
            </header>
        </div>
    )
}
