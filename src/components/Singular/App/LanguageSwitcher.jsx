import { useRef, useState, useEffect } from 'react';
import i18n from 'i18next';
import { slideDown, slideUp } from '../../../utils/slideFunctions.js';
import classes from "../../../styles/componentStyles/App/languageSwitcher.module.scss";

function LanguageSwitcher({ className }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);
  const arrowRef = useRef(null);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setIsDropdownVisible(false);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    if (isAnimating) return;
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    const arrowElement = arrowRef.current;
    if (dropdownElement && arrowElement) {
      setIsAnimating(true);

      if (isDropdownVisible) {
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
  }, [isDropdownVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <div onClick={toggleDropdown} className={`language-switcher ${classes['language-switcher']}`}>
        <span>{i18n.language === 'ru' ? 'Rus' : 'Eng'}</span>
        <button ref={arrowRef}>
          <svg className={`arrow-icon img ${isDropdownVisible ? 'rotate' : ''}`} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4.5 5L8 1" stroke="white" />
          </svg>
        </button>
      </div>

      <div ref={dropdownRef} style={{ display: 'none', overflow: 'hidden' }} className={`dropdown ${classes.dropdown}`}>
        <button value="en" onClick={handleLanguageChange}>English</button>
        <button value="ru" onClick={handleLanguageChange}>Russian</button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
