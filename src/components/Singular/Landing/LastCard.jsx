import { useTranslation } from "react-i18next";
import classes from "../../../styles/componentStyles/Landing/lastCard.module.scss";

const LastCard = () => {
    const { t } = useTranslation();
  return (
    <section id="gift" className={classes.card}>
        <div>
            <h2>{t('last__title')}</h2>
            <p>{t('last__text')}</p>
        </div>
        <button>{t('last__text-button')}</button>
    </section>
  )
}

export default LastCard