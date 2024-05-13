import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
export default function Backedby() {
    return (
        <div className={styles.backedby}>
            <h6 className={`fw500`}>Backed by</h6>
            <ul>
                <li>
                    <NavLink to="/">
                        <img src="/image/LongHashX_White_1.svg" alt="Longhash" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src="/image/Axelar_Logo_Full_White.svg" alt="Axelar" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src="/image/filecoin.svg" alt="Filecoin" />
                    </NavLink>
                </li>
            </ul>
            <p className={`fw500`}>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span>gaming experience</span>.So that you can deliver the next big hit!</p>
        </div>
    )
}
