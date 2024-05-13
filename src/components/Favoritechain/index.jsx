import styles from './styles.module.scss'
import Title from '../Title'
import { NavLink } from 'react-router-dom'
export default function Favoritechain() {
    return (
        <div className={`${styles.favoritechain} section__overlay`}>
            <Title title={`With LYNC, build on your`} colortitle={`favorite chain.`} />
            <ul>
               <List />
            </ul>
        </div>
    )
}

function List(){
    const favorites = [
        {
            image : '/image/ethereum.svg',
            name : 'ethereum'
        },
        {
            image : '/image/polygon.svg',
            name : 'polygon'
        },
        {
            image : '/image/aptos.svg',
            name : 'aptos'
        },
        {
            image : '/image/zksyn.svg',
            name : 'zksyn'
        },
        {
            image : '/image/shardeum.svg',
            name : 'shardeum'
        },
        {
            image : '/image/astar.svg',
            name : 'astar'
        },
        {
            image : '/image/saga.svg',
            name : 'saga'
        },
        {
            image : '/image/avalanche.svg',
            name : 'avalanche'
        },
    ];
    return(
        <>
            {
                favorites.map((favorite, index) => {
                    return <li key={favorite.name}>
                            <NavLink>
                                <img src={favorite.image} alt={favorite.name} />
                            </NavLink>
                        </li>
                })
            }
        </>
    )
}
