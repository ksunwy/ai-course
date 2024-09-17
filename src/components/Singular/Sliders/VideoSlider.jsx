import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';

import classes from "../../../styles/componentStyles/Landing/ninth.module.scss";

const VideoSlider = ({ className }) => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { id: 1, title: 'Slide 1', image: '/static/video/IMG_0791.gif' },
        { id: 2, title: 'Slide 2', image: '/static/video/IMG_0792.gif' },
        { id: 3, title: 'Slide 3', image: '/static/video/IMG_0793.gif' },
        { id: 4, title: 'Slide 4', image: '/static/video/IMG_0795.gif' },
        { id: 5, title: 'Slide 5', image: '/static/video/IMG_0796.gif' },
        { id: 6, title: 'Slide 6', image: '/static/video/IMG_0797.gif' },
    ];

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            setActiveIndex(swiperRef.current.swiper.realIndex);
        }
    };

    const swiperParams = {
        onSlideChange: handleSlideChange,
    };

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={-50}
            slidesPerView={2}
            {...swiperParams}
            coverflowEffect={{
                rotate: 0,         
                stretch: 0,       
                depth: 100,     
                modifier: 2.5,
                stretch: 25,     
                scale: 0.9,      
                slideShadows: false 
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={`mySwiper ${classes.mySwiper} ${className}`}
            ref={swiperRef} 
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className={`slide-content ${classes['slide-content']}`}>
                        <img
                            src={slide.image}
                            alt={slide.title}
                           className={classes.video}
                        />
                        <div className={classes.phone}>
                            <div className={classes.phone__image}>
                                <img src="/static/img/ninth/phone.png" alt="phone" width={"100%"} height={"100%"} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            <div className={`custom-button-next ${classes['custom-button-next']}`} onClick={goNext}>
                <svg width="34" height="66" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L33 33L1 65" stroke="white" />
                </svg>
            </div>
            <div className={`custom-button-prev ${classes['custom-button-prev']}`} onClick={goPrev}>
                <svg width="34" height="66" viewBox="0 0 34 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 1L1 33L33 65" stroke="white" />
                </svg>
            </div>
        </Swiper>
    );
};

export default VideoSlider;
