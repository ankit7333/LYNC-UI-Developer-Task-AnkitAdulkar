import styles from './styles.module.scss'
import Title from '../Title'
import Button from '../Button'
export default function Community() {
    return (
        <div className={`${styles.community__wrap}`}>
            <div className={styles.community}>
                <Title breakElement={true} title={`Strongest Web3`} colortitle={`Community`} />
                <Button type={`button button--primary`}>
                    <span className={`icon icon--telegram mr-1`} />
                    <span>Join Telegram</span>
                </Button>
            </div>
        </div>
    )
}
