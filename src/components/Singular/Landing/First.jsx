import { useTranslation } from "react-i18next";
import { TopLineSVG, BottomLineSVG, QuotationsMarks } from "../../Reusable/SVGs.jsx";
import classes from "../../../styles/componentStyles/Landing/first.module.scss";

const First = () => {
    const { t } = useTranslation();
  return (
    <section className={classes.first}>
        <div className={classes.first__blur}>
            <div className={classes.first__blur__image}>
                <img src="/static/img/firstBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
            </div>
        </div>

        <div className={classes.first__image}>
            <img src="/static/svg/firstReality.svg" alt="your own reality" width={"100%"} height={"100%"} />
        </div>

        <div className={classes.first__content}>
            <div className={classes.first__content__top}>
                <div className={classes.first__content__top__image}><TopLineSVG /></div>
            </div>
            <div className={classes.first__content__bottom}>
                <div className={classes.first__content__bottom__image}><BottomLineSVG /></div>
            </div>
            <h1><QuotationsMarks className={classes.marks} /> {t('first__content')} <QuotationsMarks className={classes.marks} rotation={180} /></h1>
        </div>
    </section>
  ) 
}

export default First