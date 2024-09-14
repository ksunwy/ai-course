import { useTranslation } from "react-i18next";
import classes from "../../../styles/componentStyles/Landing/seventh.module.scss";

const Seventh = () => {
    const { t } = useTranslation();
    return (
        <section className={classes.seventh}>
            <div className={classes.seventh__left}>
                <span>{t('seventh__desc')} /</span>
                <div className={classes.seventh__left__images}>
                    <div className={classes.seventh__left__images__first}>
                        <div className={classes.seventh__left__images__first__image}>
                            <img src="/static/img/seventh/seventhFirstImage.png" alt="image" width={"100%"} height={"100%"} />
                        </div>
                    </div>
                    <div className={classes.seventh__left__images__second}>
                        <div className={classes.seventh__left__images__second__image}>
                            <img src="/static/img/seventh/seventhSecondImage.png" alt="image" width={"100%"} height={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.seventh__right}>
                <div className={classes.seventh__right__top}>
                    <h2>{t('seventh__title')}</h2>
                    <div>
                        <h2>{t('seventh__title-second')}</h2>
                        <h4>{t('seventh__subtitle')}</h4>
                    </div>
                </div>
                <div className={classes.seventh__right__bottom}>
                    <div>
                        <span>{t("seventh__place-first")}</span>
                        <h3>$5000</h3>
                    </div>
                    <div>
                        <span>{t("seventh__place-second")}</span>
                        <h3>$1000</h3>
                    </div>
                    <div style={{borderBottom: "1px solid #D9D9D9"}}>
                        <span>{t("seventh__place-third")}</span>
                        <h3>$500</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seventh