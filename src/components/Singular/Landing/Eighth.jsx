import { useTranslation } from "react-i18next";
import Review from "../../Reusable/Landing/Eighth/Review.jsx";
import classes from "../../../styles/componentStyles/Landing/eighth.module.scss";

const Eighth = () => {
    const { t } = useTranslation();
    return (
        <section id="reviews" className={classes.eighth}>
            <div className={classes.eighth__smallBlur}>
                <div className={classes.eighth__smallBlur__image}>
                    <img src="/static/img/smallBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
                </div>
            </div>
            <div className={classes.eighth__blur}>
                <div className={classes.eighth__blur__image}>
                    <img src="/static/img/eightBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
                </div>
            </div>
            <span>{t('eighth__desc')} /</span>
            <h2>{t('eighth__title')}</h2>
            <div className={classes.eighth__content}>
                <div className={classes.eighth__content__left}>
                    <Review image={"/static/img/eight/student1.png"} imageClasses={classes.firstImage} name={"Tatyana"} review={t('eighth__review-first')} />
                    <Review image={"/static/img/eight/student3.png"} imageClasses={classes.secondImage} name={"maria"} review={t('eighth__review-third')} />
                </div>
                <div className={classes.eighth__content__right}>
                    <Review image={"/static/img/eight/student2.png"} imageClasses={classes.thirdImage} name={"Sofia"} review={t('eighth__review-second')} />
                    <Review image={"/static/img/eight/student4.png"} imageClasses={classes.fourthImage} name={"Aisha"} review={t('eighth__review-fourth')} />
                </div>
            </div>
        </section>
    )
}

export default Eighth