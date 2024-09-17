import { useTranslation } from "react-i18next";
import Review from "../../Reusable/Landing/Eighth/Review.jsx";
import EightSlider from "../Sliders/EightSlider.jsx";
import classes from "../../../styles/componentStyles/Landing/eighth.module.scss";

const Eighth = () => {
    const { t } = useTranslation();

    const firstArray = [`${t('eighth__review-first')}`, `${t('eighth__review-first-break')}`, `${t('eighth__review-first-break-first')}`];
    const secondArray = [`${t('eighth__review-second')}`, `${t('eighth__review-second-break')}`, `${t('eighth__review-second-break-first')}`, `${t('eighth__review-second-break-second')}, ${t('eighth__review-second-break-third')}, ${t('eighth__review-second-break-fourth')}`];
    const thirdArray = [`${t('eighth__review-third')}`, `${t('eighth__review-third-break')}`, `${t('eighth__review-third-break-first')}`];
    const fourthArray = [`${t('eighth__review-fourth')}`, `${t('eighth__review-fourth-break')}`];

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
            <span className="desktop">{t('eighth__desc')} /</span>
            <h2>{t('eighth__title')}</h2>
            <div className={`${classes.eighth__content} desktop`}>
                <div className={classes.eighth__content__left}>
                    <Review array={firstArray} image={"/static/img/eight/student1.png"} imageClasses={classes.firstImage} name={"Tatyana"} review={t('eighth__review-first')} />
                    <Review array={thirdArray} image={"/static/img/eight/student3.png"} imageClasses={classes.secondImage} name={"maria"} review={t('eighth__review-third')} />
                </div>
                <div className={classes.eighth__content__right}>
                    <Review array={secondArray} image={"/static/img/eight/student2.png"} imageClasses={classes.thirdImage} name={"Sofia"} review={t('eighth__review-second')} />
                    <Review array={fourthArray} image={"/static/img/eight/student4.png"} imageClasses={classes.fourthImage} name={"Aisha"} review={t('eighth__review-fourth')} />
                </div>
            </div>

            <div className={`${classes.eighth__content} mobile`}>
                <EightSlider />
            </div>
        </section>
    )
}

export default Eighth