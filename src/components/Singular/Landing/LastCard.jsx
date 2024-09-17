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
        <a href='https://t.me/yoraiacademy_bot' target='_blank'>{t('last__text-button')}</a>
    </section>
  )
}

export default LastCard