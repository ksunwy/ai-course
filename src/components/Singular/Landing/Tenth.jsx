import { useTranslation } from "react-i18next";
import FAQItem from "../../Reusable/Landing/Tenth/FAQItem.jsx";
import classes from "../../../styles/componentStyles/Landing/tenth.module.scss";

const Tenth = () => {
    const { t } = useTranslation();

    const array = [
        {question: `${t("faq__question-first")}`, answer: `${t("faq__answers-first")}`},
        {question: `${t("faq__question-second")}`, answer: `${t("faq__answers-second")}`},
        {question: `${t("faq__question-third")}`, answer: `${t("faq__answers-third")}`},
        {question: `${t("faq__question-fourth")}`, answer: `${t("faq__answers-fourth")}`},
        {question: `${t("faq__question-fifth")}`, answer: `${t("faq__answers-fifth")}`},
        {question: `${t("faq__question-sixth")}`, answer: `${t("faq__answers-sixth")}`},
        {question: `${t("faq__question-seventh")}`, answer: `${t("faq__answers-seventh")}`},
    ];

  return (
    <section className={classes.tenth}>
        <div className={classes.tenth__content}>
            <div className={classes.tenth__content__top}>
                <span className="desktop">{t('faq__desc')} /</span>
                <h2>{t('faq__title')}</h2>
            </div>
            <div className={classes.tenth__content__bottom}>
                {array.map((el, i) => <FAQItem key={i} id={i} title={el.question} text={el.answer} />)}
            </div>
        </div>
    </section>
  )
}

export default Tenth