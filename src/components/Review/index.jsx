import Title from '../Title'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import styles from './styles.module.scss'
import CustomSwiper from '../../styles/CustomSwiper.scss'

const reviews = [
    {
        title : 'Alex George',
        subtitle : 'CEO, Polygon',
        content : `Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!`
    },
    {
        title : 'Alex George',
        subtitle : 'CEO, Polygon',
        content : `Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!`
    },
    {
        title : 'Alex George',
        subtitle : 'CEO, Polygon',
        content : `Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!`
    },
    {
        title : 'Alex George',
        subtitle : 'CEO, Polygon',
        content : `Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!`
    },
];

export default function Review() {
    return (
        <div className={styles.review}>
            <Title title={`Valuable`} colortitle={`Reviews`} />
            <Slider />
        </div>
    )
}

function Slider(){
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
            reviews.map((review) => {
                return <SwiperSlide key={review.title}>
                    <div className={styles.slide}>
                        <div className={styles.slide__top}>
                            <div>{review.content}</div>
                        </div>
                        <div className={styles.slide__bottom}>
                            <div className={styles.profile}><span /></div>
                            <div className={styles.content}>
                                <div className={styles.slide__title}>{review.title}</div>
                                <div className={styles.slide__subtitle}>{review.subtitle}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>
        </div>
    )
}
