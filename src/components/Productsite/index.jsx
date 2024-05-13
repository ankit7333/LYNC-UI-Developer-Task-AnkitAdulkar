import styles from './styles.module.scss'
import Title from '../Title'
export default function Productsite() {
    return (
        <div className={styles.productsite}>
            <Title title={`Product`} colortitle={`Suite`} />
            <ul>
               <List />
            </ul>
        </div>
    )
}

function List(){
    const products = [
        {
            image : '/image/thumb.png',
            title : 'LYNC Wallet SDK',
            content : 'Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes.'
        },
        {
            image : '/image/thumb.png',
            title : 'LYNC Wallet SDK',
            content : 'Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes.'
        },
        {
            image : '/image/thumb.png',
            title : 'LYNC Wallet SDK',
            content : 'Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes.'
        },
        {
            image : '/image/thumb.png',
            title : 'LYNC Wallet SDK',
            content : 'Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes.'
        },
        {
            image : '/image/thumb.png',
            title : 'LYNC Wallet SDK',
            content : 'Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes.'
        },
        {
            image : '/image/thumb.png',
            title : 'LYNC Wallet SDK',
            content : 'Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes.'
        }
    ];
    return(
        <>
        {
            products.map((product, index) => { 
                return <li key={product.title}>
                        <figure>
                            <img className={`mb-2`} src={product.image} alt={product.title} />
                            <figcaption className={`fw600`}>{product.title}-{index}</figcaption>
                        </figure>
                        <span>{product.content}</span>
                    </li>
            })
        }
        </>
    )
}
