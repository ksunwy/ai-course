import { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";
import SliderItem from "../../Reusable/Landing/Fifth/SliderItem.jsx";
import 'swiper/css';
import 'swiper/css/pagination';
import classes from "../../../styles/componentStyles/Landing/fifth.module.scss";

const FifthSlider = () => {
    const swiperRef = useRef(null);
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        slidesPerView: 1,
        spaceBetween: 0,
        onSlideChange: handleSlideChange,
    };

    return (
        <div className={classes.slider}>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                {...swiperParams}
                className={classes.slider__content}
            >
                <SwiperSlide><SliderItem activeIndex={activeIndex} goNext={goNext} goPrev={goPrev} image={"/static/img/fifth/fifthFirstImage.png"} title={t('fifth__first-title')} subtitle={t('fifth__first-subtitle')} desc={t('fifth__first-desc')} /> </SwiperSlide>
                <SwiperSlide><SliderItem activeIndex={activeIndex} goNext={goNext} goPrev={goPrev} image={"/static/img/fifth/fifthSecondImage.png"} title={t('fifth__second-title')} subtitle={t('fifth__second-subtitle')} desc={t('fifth__second-desc')} /> </SwiperSlide>
                <SwiperSlide><SliderItem isThird activeIndex={activeIndex} goNext={goNext} goPrev={goPrev} image={"/static/img/fifth/fifthThirdImageDesk.png"} title={t('fifth__third-title')} subtitle={t('fifth__third-subtitle')} desc={t('fifth__third-desc')} /> </SwiperSlide>
                <SwiperSlide><SliderItem activeIndex={activeIndex} goNext={goNext} goPrev={goPrev} image={ windowWidth > 850 ? "/static/img/fifth/fifthFourthImage — копия.png" : "/static/img/fifth/fifthFourthImage.png"} title={t('fifth__fourth-title')} subtitle={t('fifth__fourth-subtitle')} desc={t('fifth__fourth-desc')} /> </SwiperSlide>
                <SwiperSlide><SliderItem activeIndex={activeIndex} goNext={goNext} goPrev={goPrev} image={"/static/img/fifth/fifthFifthImage.png"} title={t('fifth__fifth-title')} subtitle={t('fifth__fifth-subtitle')} desc={t('fifth__fifth-desc')} secondDesc={t('fifth__fifth-desc-second')} /> </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FifthSlider;