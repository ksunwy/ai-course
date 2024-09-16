import { useTranslation } from "react-i18next";
import FifthSlider from "../Sliders/FifthSlider.jsx";
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
            <FifthSlider />
        </section>
    )
}

export default Fifth