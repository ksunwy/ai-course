import { useTranslation } from "react-i18next";
import VideoSlider from "../Sliders/VideoSlider.jsx";
import classes from "../../../styles/componentStyles/Landing/ninth.module.scss";

const Ninth = () => {
    const { t } = useTranslation();
    return (
        <section className={classes.ninth}>
            <div className={classes.ninth__left}>
                <div className={classes.ninth__left__top}>
                    <h2>{t("ninth__title")}</h2>
                    <p>{t("ninth__text")}</p>
                </div>
                <div className={`${classes.ninth__right} mobile`}>
                    <VideoSlider />
                </div>
                <div className={classes.ninth__left__bottom}>
                    <p>{t("ninth__text-second")}</p>
                    <a href='https://t.me/yoraiacademy_bot' target='_blank'>{t("ninth__text-button")}</a>
                </div>
            </div>
            <div className={`${classes.ninth__right} desktop`}>
                {/* <div className={classes.ninth__right__image}>
                    <img src="/static/img/ninth/video.png" alt="video" width={"100%"} height={"100%"} />
                </div> */}
                <VideoSlider className={'desktop'} />
            </div>
        </section>
    )
}

export default Ninth