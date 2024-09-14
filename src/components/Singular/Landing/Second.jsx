import { useTranslation } from "react-i18next";
import InfoCard from "../../../components/Reusable/Landing/Second/InfoCard.jsx";
import classes from "../../../styles/componentStyles/Landing/second.module.scss";

const Second = () => {
    const { t } = useTranslation();
  return (
    <section className={classes.second}>
        <div className={classes.second__blur}>
            <div className={classes.second__blur__image}>
                <img src="/static/img/firstBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
            </div>
        </div>
        <div className={classes.second__smallBlur}>
            <div className={classes.second__smallBlur__image}>
                <img src="/static/img/smallBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
            </div>
        </div>
        <div className={classes.second__left}>
            <span>{t('second__desc')} /</span>
            <div className={classes.second__left__content}>
                <InfoCard subtitle={t('second__subtitle-first')} text={t('second__text-first')} src={"/static/img/second/secondFirstImage.png"} imageClasses={classes.firstImage} />
                <InfoCard subtitle={t('second__subtitle-second')} text={t('second__text-second')} src={"/static/img/second/secondSecondImage.png"} imageClasses={classes.secondImage} />
            </div>
        </div>
        <div className={classes.second__right}>
            <h2>{t('second__title')}</h2>
            <div className={classes.second__right__content}>
                <div className={classes.second__right__content__left}>
                    <p>{t('second__text-third')}</p>
                    <div className={classes.second__right__content__left__image}>
                        <img src="/static/img/second/secondThirdImage.png" alt="thirdImage" width={"100%"} height={"100%"} />
                    </div>
                </div>
                <InfoCard subtitle={t('second__subtitle-fourth')} text={t('second__text-fourth')} src={"/static/img/second/secondFourthImage.png"} imageClasses={classes.fourthImage} />
            </div>
        </div>
    </section>
  )
}

export default Second