// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Button from '../Button'
import styles from './styles.module.scss'
import CustomSwiper from '../../styles/CustomSwiper.scss'

const blogs = [
    {
        image : '/image/blog.png',
        title : 'LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮',
        content : 'LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.'
    },
    {
        image : '/image/blog.png',
        title : 'LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮',
        content : 'LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.'
    },
    {
        image : '/image/blog.png',
        title : 'LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮',
        content : 'LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.'
    },
    {
        image : '/image/blog.png',
        title : 'LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮',
        content : 'LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.'
    },
]

export default function Carousel() {
    return (
        <div>
            <Swiper
            breakpoints={{
                // When window width is >= 320px (mobile)
                320: {
                  slidesPerView: 1,
                },
                // When window width is >= 768px (tablet)
                768: {
                  slidesPerView: 2,
                },
                // When window width is >= 1024px (desktop)
                1024: {
                  slidesPerView: 3,
                },
              }}
        spaceBetween={30}
        className="mySwiper"
        navigation={true} modules={[Navigation]}
      >
        {
            blogs.map((blog) => {
                return <SwiperSlide key={blog.title}>
                    <div className={styles.slide}>
                        <div className={styles.slide__top}><img src={blog.image} /></div>
                        <div className={styles.slide__bottom}>
                            <div className={styles.slide__title}>{blog.title}</div>
                            <div className={styles.slide__content}>{blog.content}</div>
                            <Button type={`button button--white p-1`}>Read more</Button>
                        </div>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>
        </div>
    )
}
