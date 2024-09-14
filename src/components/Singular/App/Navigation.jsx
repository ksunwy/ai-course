import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import classes from "../../../styles/componentStyles/App/navigation.module.scss";

const Navigation = () => {
  const { t } = useTranslation();

  const links = [`${t('nav__link-first')}`, `${t('nav__link-second')}`, `${t('nav__link-third')}`, `${t('nav__link-fourth')}`, `${t('nav__link-fifth')}`];
  return (
    <nav className={classes.nav}>
        <button>{t('nav__left-button')}</button>
        <ul>
            {links.map((el, i) => <li key={i}><a href="#" target='_blank'>{el}</a></li>)}
        </ul>
        <LanguageSwitcher />
    </nav>
  )
}

export default Navigation