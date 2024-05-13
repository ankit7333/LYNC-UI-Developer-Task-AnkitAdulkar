import Title from '../Title'
import styles from './styles.module.scss'
import Button from '../Button'
export default function Sdk() {
    return (
        <div className={styles.sdk}>
            <Title sdk title={`Power Up Your Web3 Game Development, With`} colortitle={`LYNC SDKs`} />
            <p>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</p>
            <div className={styles.card}>
                <h6>Don't Worry about the <span>Web3</span> Complexities</h6>
                <ul>
                    <li><span>Save 9-12 months of development time</span></li>
                    <li><span>Focus completely on Game Dev and Mechanics</span></li>
                    <li><span>Save Up to $500K+ on Salaries & Smart Contract Auditing</span></li>
                    <li><span>Go Cross-Chain in a few clicks</span></li>
                </ul>
                <span className={styles.diamond} />
            </div>
            <div className={styles.card__wrap}>
                <div className={styles.card__1}>
                    <div className={styles.card__left}>
                        <h6>Elevate Your Gameplay with Essential Insights!</h6>
                        <div className={styles.para}>Unleash Your Potential - Explore the Knowledge Hub Today!</div>
                        <Button type={`button button--white`}>View Docs</Button>
                    </div>
                    <div className={styles.card__right}>
                        <img src="/image/game-remote.svg" alt="game remote" />
                    </div>
                </div>
                <div className={styles.card__grid}>
                    <div className={styles.card__2}>
                        <h6>200 +</h6>
                        <div className={styles.content}>Projects have downloaded & integrated LYNC SDKs</div>
                    </div>
                    <div className={`${styles.card__2} ${styles.card__3}`}>
                        <div className={styles.left}>
                            <h6>50000 +</h6>
                            <div className={styles.content}>User ops created in 10 hours</div>
                        </div>
                        <div className={styles.right}>
                            <img src="/image/crypto-wallet.svg" alt="crypto wallet" />
                        </div>
                    </div>
                    <div className={styles.card__4}>
                        <h6>8000 +</h6>
                        <div className={styles.content}>Contracts have been deployed via LYNC</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
