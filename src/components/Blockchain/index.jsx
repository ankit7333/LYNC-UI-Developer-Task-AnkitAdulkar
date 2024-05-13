import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import Title from '../Title'
export default function Blockchain() {
    return (
        <div className={`${styles.blockchain}`}>
            <Title title={`Making blockchain gaming accessible to`} colortitle={`everyone!`} />
            <ul>
                <List />
            </ul>
        </div>
    )
}

function List(){
    const blockchains = [
        {
            image : '/image/zura.svg',
            name : 'zura'
        },
        {
            image : '/image/borntodie.svg',
            name : 'born to die'
        },
        {
            image : '/image/SOM.svg',
            name : 'soul of meta'
        },
        {
            image : '/image/lumos.svg',
            name : 'lumos'
        },
        {
            image : '/image/vr.svg',
            name : 'vr'
        }
    ]
    return(
        <>
            {blockchains.map((blockchain, index) => {
                return <li key={blockchain.name}>
                    <NavLink>
                        <img src={blockchain.image} alt={blockchain.name} />
                    </NavLink>
                </li>
            })}
        </>
    )
}
