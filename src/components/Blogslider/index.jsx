import styles from './styles.module.scss'
import Title from '../Title'
import Carousel from '../Carousel'
export default function Blogslider() {
    return (
        <div className={styles.blog}>
            <Title title={`From our`} colortitle={`Blog`} />
            <p>Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights, Tips, and Innovations in Gaming SDKs!</p>
            <Carousel />
        </div>
    )
}
