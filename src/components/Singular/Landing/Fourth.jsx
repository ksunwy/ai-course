import { useTranslation } from "react-i18next";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FourthDescription from "../../Reusable/Landing/Fourth/FourthDescription.jsx";
import classes from "../../../styles/componentStyles/Landing/fourth.module.scss";

const Fourth = () => {
    const { t } = useTranslation();
    const swiperRef = useRef(null);

    const array = [
        {id: `01`, subtitle: `${t("fourth__first-subtitle")}`, text: `${t("fourth__first-desc")}`},
        {id: `02`, subtitle: `${t("fourth__second-subtitle")}`, text: `${t("fourth__second-desc")}`},
        {id: `03`, subtitle: `${t("fourth__third-subtitle")}`, text: `${t("fourth__third-desc")}`},
        {id: `04`, subtitle: `${t("fourth__fourth-subtitle")}`, text: `${t("fourth__fourth-desc")}`},
    ];

    const swiperParams = {
        slidesPerView: 1.12,
        spaceBetween: 20,
    };

  return (
    <section className={classes.fourth}>
        <div className={classes.fourth__blur}>
                <div className={classes.fourth__blur__image}>
                    <img src="/static/img/thirdBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
                </div>
            </div>
        <div className={classes.fourth__left}>
            <div className={classes.fourth__left__content}>
                <h2>{t("fourth__title")}</h2>
                <div className={classes.fourth__left__content__list}>
                    {array.map(el => <FourthDescription key={el.id} id={el.id} className={el.id === `02` || el.id === `04` && classes.secondText} subtitle={el.subtitle} text={el.text} />)}
                </div>
            </div>
            <button>{t("fourth__button-text")}</button>
        </div>
        <div className={classes.fourth__right}>
            <Swiper
                ref={swiperRef}
                {...swiperParams}
            >
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthFirstImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthSecondImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthThirdImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthFourthImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthFifthImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthSixthImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.fourth__right__image}>
                        <img src="/static/img/fourth/fourthSeventhImage.png" alt="image" width={"100%"} height={"100%"} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Fourth