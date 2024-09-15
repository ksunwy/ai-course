import { useTranslation } from "react-i18next";
import classes from "../../../styles/componentStyles/Landing/fifth.module.scss";

const Fifth = () => {
    const { t } = useTranslation();
    return (
        <section id="program" className={classes.fifth}>
            <div className={classes.fifth__blur}>
                <div className={classes.fifth__blur__image}>
                    <img src="/static/img/thirdBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
                </div>
            </div>
            <h2>{t('fifth__title')}</h2>
            <div className={classes.fifth__first}>
                <div className={classes.fifth__first__left}>
                    <img src="/static/img/fifth/fifthFirstImage.png" alt="image" width={"100%"} height={"100%"} />
                </div>
                <div className={classes.fifth__first__right}>
                    <div className={classes.fifth__first__right__top}>
                        <h3>{t('fifth__first-title')}</h3>
                        <div className={classes.fifth__first__right__top__second}>
                            <h4>{t('fifth__first-subtitle')}</h4>
                            <div className={classes.fifth__first__right__top__second__line} />
                        </div>
                        <p>{t('fifth__first-desc')}</p>
                    </div>
                    <svg width="168" height="18" viewBox="0 0 168 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" x="29" y="8" width="110" height="1" fill="#D9D9D9" />
                        <rect x="29" y="6" width="22" height="3" fill="#D9D9D9" />
                        <path d="M9 1L1 9L9 17" stroke="white" />
                        <path d="M159 1L167 9L159 17" stroke="white" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Fifth