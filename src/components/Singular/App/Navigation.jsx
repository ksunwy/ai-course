import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Options from './Options.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { slideDown, slideUp } from '../../../utils/slideFunctions.js';
import classes from "../../../styles/componentStyles/App/navigation.module.scss";

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownSecondRef = useRef(null);
  const arrowRef = useRef(null);

  const links = [
    { text: t('nav__link-first'), link: 'relatives' },
    { text: t('nav__link-second'), link: 'program' },
    { text: t('nav__link-third'), link: 'plans' },
    { text: t('nav__link-fourth'), link: 'competition' },
    { text: t('nav__link-fifth'), link: 'gift' },
  ];

  const toggleDropdown = () => {
    if (isAnimating) return;
    setIsOpen(!isOpen);
  };

  const [windowWidth, setWindowWidth] = useState(900);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  useEffect(() => {
    const dropdownElement = dropdownSecondRef.current;
    const arrowElement = arrowRef.current;
    if (dropdownElement && arrowElement) {
      setIsAnimating(true);

      if (isOpen) {
        slideDown(dropdownElement, 300);
        arrowElement.classList.add('rotate');
      } else {
        slideUp(dropdownElement, 300);
        arrowElement.classList.remove('rotate');
      }

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [isOpen]);

  return (
    <nav className={classes.nav} style={{background: isOpen && windowWidth <= 850 && "#1C1C1C"}} onClick={toggleDropdown}>
      <a href='https://t.me/yoraiacademy_bot' target='_blank' className='desktop'>{t('nav__left-button')}</a>
      <ul className='desktop'>
        {links.map((el, i) => <li key={i}><a href={`#${el.link}`}>{el.text}</a></li>)}
      </ul>
      <LanguageSwitcher className={"desktop"} />

      <div onClick={toggleDropdown} className={`mobile`}>
        <button ref={arrowRef}>
          <Options isOpen={isOpen} setIsOpen={setIsOpen} slideToggle={toggleDropdown} />
        </button>
      </div>

      <div ref={dropdownSecondRef} style={{ display: 'none', overflow: 'hidden' }} className={`dropdown mobile ${classes.dropdown}`}>
        <div className={classes.dropdown__bg}>
          <div className={classes.dropdown__bg__image}>
            <img src="/static/img/menuBg.png" alt="bg" width={"100%"} height={"100%"} />
          </div>
        </div>
        <LanguageSwitcher className={classes.mobileSwitcher} />
        <ul>
          {links.slice(0, -1).map((el, i) => <li key={i}><a href={`#${el.link}`}>{el.text}</a></li>)}
        </ul>
        <a href='https://t.me/yoraiacademy_bot' target='_blank'>{t('last__text-button')}</a>
      </div>
    </nav>
  )
}

export default Navigation