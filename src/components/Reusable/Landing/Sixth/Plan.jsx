import { useTranslation } from "react-i18next";
import classes from "../../../../styles/componentStyles/Landing/sixth.module.scss";

const Plan = ({ image, list, plan, price, buttonText, places, setHoveredPlan, hoveredPlan }) => {
    const { t } = useTranslation();

    return (
        <div
        //  onMouseEnter={() => setHoveredPlan(price === 7900 ? t("sixth__third-title") : t("sixth__first-title"))}
        //     onMouseLeave={() => setHoveredPlan(null)} 
            className={
                // hoveredPlan === plan ? classes.coolPlan : 
                classes.plan}>
            <div className={
                // hoveredPlan === plan ? classes.coolPlan__image : 
                classes.plan__image}>
                <img src={image} alt="image" width={"100%"} height={"100%"} />
            </div>
            <div className={
                // hoveredPlan === plan ? classes.coolPlan__content : 
                classes.plan__content}>
                <div className={classes.plan__content__top}>
                    <div className={
                        // hoveredPlan === plan ? classes.coolPlan__content__top__price : 
                         classes.plan__content__top__price}>
                        <span>{plan}</span>
                        <h4>${price}</h4>
                    </div>
                    <div className={
                        // hoveredPlan === plan ? classes.coolPlan__content__top__list : 
                        classes.plan__content__top__list}>
                        {list.map((el, i) => <div key={i}>
                            {el.accept ? (
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.475108 7L0 6.44571L2.52489 3.5L0 0.554293L0.475108 0L3 2.94571L5.52489 0L6 0.554293L3.47511 3.5L6 6.44571L5.52489 7L3 4.05429L0.475108 7Z" fill="#F5F5F5" />
                                </svg>
                            ) : (
                                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.39845 6L0 3.16846L0.480635 2.60091L2.39845 4.86502L6.51937 0L7 0.567555L2.39845 6Z" fill="#F5F5F5" />
                                </svg>
                            )}
                            {el.accept ? <s className={classes.smallThroughText}><p>{el.text}</p></s> : <p>{el.text}</p>}
                        </div>)}
                    </div>
                </div>
                <div className={classes.plan__content__bottom}>
                    {places && <span>{t("sixth__left")} <span>{places}</span></span>}
                    <button>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Plan