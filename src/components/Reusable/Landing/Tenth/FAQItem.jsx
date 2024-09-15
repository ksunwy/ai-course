import { useRef, useState, useEffect } from 'react';
import { slideDown, slideUp } from '../../../../utils/slideFunctions.js';
import classes from "../../../../styles/componentStyles/Landing/tenth.module.scss";

const FAQItem = ({ text, title, id }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const dropdownRef = useRef(null);
    const arrowRef = useRef(null);

    const toggleDropdown = () => {
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

    return (
        <div className={classes.top}>
            <div onClick={toggleDropdown} className={`language-switcher ${classes.dropdown}`} style={{ borderTop: id === 0 && "1px solid #BEBEBE" }}>
                <div className={classes.wrapper}>
                    <span>{title}</span>
                    <p ref={dropdownRef} style={{ display: 'none', overflow: 'hidden' }} className={`dropdown desktop ${classes.text}`}>
                        {text}
                    </p>
                </div>
                <button ref={arrowRef}>
                    <svg className={`arrow-icon img ${isDropdownVisible ? classes.rotate : classes.unrotate} desktop`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 26.8513V0.353553H27V25.6442L1.35576 0L0.648651 0.707107L26.2929 26.3513H1.0022V27.3513H27.5H28V26.8513Z" fill="#BEBEBE" />
                    </svg>
                    <svg className={`arrow-icon img ${isDropdownVisible ? classes.rotate : classes.unrotate} mobile`} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.4864V0.353553H10V9.27926L0.720737 0L0.0136299 0.707107L9.29289 9.98637H0.367184V10.9864H10.5H11V10.4864Z" fill="#BEBEBE" />
                    </svg>
                </button>
            </div>
            <p ref={dropdownRef} style={{ display: 'none', overflow: 'hidden' }} className={`dropdown mobile ${classes.text}`}>
                {text}
            </p>
        </div>
    )
}

export default FAQItem