import styles from './styles.module.scss'
import Button from '../Button'
export default function Launchyourgame() {
    return (
        <div className={styles.launchyourgame}>
            <div className={styles.launchyourgame__inner}>
                <h4>Launch Your Game on <span>Web 3.0</span> in Minutes</h4>
                <p>We help game developers to launch their game on Web 3.0, by keeping blockchain complexities aside with WebWorld SDKs!</p>
                <div className={styles.btnwrap}>
                    <Button type={`button button--primary`}>
                            <span>Get started</span>
                            <span className={`icon icon--rightwhite`} />
                    </Button>
                    <Button type={`button button--transparent`}>
                            <span>View Docs</span>
                            <span className={`icon icon--rightwhite`} />
                    </Button>
                </div>
           </div>
        </div>
    )
}
