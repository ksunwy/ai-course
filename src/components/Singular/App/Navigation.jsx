import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import classes from "../../../styles/componentStyles/App/navigation.module.scss";

const Navigation = () => {
  const { t } = useTranslation();

  const links = [
    { text: t('nav__link-first'), link: 'relatives'},
    { text: t('nav__link-second'), link: 'program'},
    { text: t('nav__link-third'), link: 'plans' },
    { text: t('nav__link-fourth'), link: 'competition' },
    { text: t('nav__link-fifth'), link: 'gift' },
  ];

  return (
    <nav className={classes.nav}>
      <button>{t('nav__left-button')}</button>
      <ul>
        {links.map((el, i) => <li key={i}><a href={`#${el.link}`}>{el.text}</a></li>)}
      </ul>
      <LanguageSwitcher />
    </nav>
  )
}

export default Navigation