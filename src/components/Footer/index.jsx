import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <h4>Got a game idea ? <br/> Let's make it big together !!!</h4>
                <Button type={`button button--primary`}>
                    <span>Get started</span>
                    <span className={`icon icon--rightwhite`} />
                </Button>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__bottom__top}>
                    <div className={styles.footer__1}>
                        <div><img className={styles.logo} src="/image/lync_logo.svg" alt="logo" /></div>
                        <p>A GameFi Infrastructure</p>
                        <ul>
                            <li><NavLink><img src="/image/linkedin.svg" alt="linkedin" /></NavLink></li>
                            <li><NavLink><img src="/image/youtube.svg" alt="youtube" /></NavLink></li>
                            <li><NavLink><img src="/image/twiteer.svg" alt="twiteer" /></NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.footer__2}>
                        <div>
                            <h6>Product</h6>
                            <span>SDK's</span>
                            <span>Transfer API's</span>
                            <span>Token API's</span>
                            <span>NFT API's</span>
                        </div>
                        <div>
                            <h6>Company</h6>
                            <span>About us</span>
                            <span>Press Kit</span>
                            <span>Security</span>
                            <span>Privacy Policy</span>
                        </div>
                        <div>
                            <h6>Contact</h6>
                            <span>Email</span>
                            <span>Discord</span>
                            <span>Telegram</span>
                            <span>Press</span>
                        </div>
                    </div>
                    <div className={styles.footer__3}>
                        <h6>Supercharge your inbox</h6>
                        <div className={styles.newsletter}>Sign up for our newsletter</div>
                        <div className={styles.inputbox}>
                            <input type="email" placeholder="enter your email address" />
                            <Button type={`button button--primary`}>Submit</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__bottom__bottom}>
                    2024 LYNC World  · Terms of service
                </div>
            </div>
        </footer>
    )
}
