import styles from './styles.module.scss'
import Title from '../Title'
import { NavLink } from 'react-router-dom'
export default function Partner() {
    return (
        <div className={`${styles.favoritechain} section__overlay`}>
            <Title title={`Our`} colortitle={`Believers and Partners`} />
            <ul>
               <List />
            </ul>
        </div>
    )
}

function List(){
    const partners = [
        {
            image : '/image/filecoin.svg',
            name : 'filecoin'
        },
        {
            image : '/image/chainlink.svg',
            name : 'chainlink'
        },
        {
            image : '/image/spheron.svg',
            name : 'spheron'
        },
        {
            image : '/image/LongHashX_White_1.svg',
            name : 'Longhash'
        },
        {
            image : '/image/Axelar_Logo_Full_White.svg',
            name : 'alexar'
        },
        {
            image : '/image/biconomy.svg',
            name : 'Biconomy'
        },
        {
            image : '/image/lighthouse.svg',
            name : 'lighthouse'
        },
        {
            image : '/image/arabic.svg',
            name : 'arabic'
        },
    ];
    return(
        <>
            {
                partners.map((partner, index) => {
                    return <li key={partner.name}>
                            <NavLink>
                                <img src={partner.image} alt={partner.name} />
                            </NavLink>
                        </li>
                })
            }
        </>
    )
}
