import { useTranslation } from "react-i18next";
import Plan from "../../Reusable/Landing/Sixth/Plan.jsx";
import CoolPlan from "../../Reusable/Landing/Sixth/CoolPlan.jsx";
import classes from "../../../styles/componentStyles/Landing/sixth.module.scss";
import { useState } from "react";

const Sixth = () => {
    const { t } = useTranslation();

    const firstList = [
        { text: `${t('sixth__first-list')}` },
        { accept: true, text: `${t('sixth__second-list')}` },
        { accept: true, text: `${t('sixth__third-list')}` },
        { accept: true, text: `${t('sixth__fourth-list')}` },
    ];

    const secondList = [
        { text: `${t('sixth__first-list')}` },
        { text: `${t('sixth__second-list')}` },
        { text: `${t('sixth__third-list')}` },
        { text: `${t('sixth__fourth-list')}` },
        { text: `${t('sixth__fifth-list')}` },
    ];

    const thirdList = [
        { text: `${t('sixth__first-list')}` },
        { text: `${t('sixth__second-list')}` },
        { text: `${t('sixth__sixth-list')}` },
        { text: `${t('sixth__seventh-list')}` },
        { text: `${t('sixth__eight-list')}` },
        { text: `${t('sixth__ninth-list')}` },
        { text: `${t('sixth__tenth-list')}` },
        { text: `${t('sixth__fifth-list')}` },
    ];
    const [hoveredPlan, setHoveredPlan] = useState(t('sixth__second-title'));

    return (
        <section id="plans" className={classes.sixth}>
            <div className={classes.sixth__content}>
                <h2>{t('sixth__title')}</h2>
                <div className={classes.sixth__content__cards}>
                    <Plan
                        hoveredPlan={hoveredPlan}
                        setHoveredPlan={setHoveredPlan}
                        image={"/static/img/sixth/sixthFirstImage.png"} list={firstList} plan={t("sixth__first-title")} price={340} buttonText={t("sixth__buttonText")} />
                    <CoolPlan
                        hoveredPlan={hoveredPlan}
                        setHoveredPlan={setHoveredPlan}
                        image={"/static/img/sixth/sixthSecondImage.png"} list={secondList} plan={t("sixth__second-title")} price={990} buttonText={t("sixth__buttonText")} places={100} />
                    <Plan
                        hoveredPlan={hoveredPlan}
                        setHoveredPlan={setHoveredPlan}
                        image={"/static/img/sixth/sixthThirdImage.png"} list={thirdList} plan={t("sixth__third-title")} price={7900} buttonText={t("sixth__buttonText")} places={10} />
                </div>
            </div>
        </section>
    )
}

export default Sixth