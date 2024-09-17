import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EightItem from '../../Reusable/Landing/Eighth/EightItem.jsx';
import classes from '../../../styles/componentStyles/Landing/eighth.module.scss';

const EightSlider = () => {
    const { t } = useTranslation();
    const items = [
        {
            isSecond: true,
            image: '/static/img/eight/smallSecondReviewImage.png',
            text: t('eighth__review-fourth'),
            name: 'Aisha',
            secondText: t('eighth__review-third'),
            secondName: 'Maria',
            imageSecond: '/static/img/eight/smallFirstReviewImage.png',
        },
        {
            image: '/static/img/eight/smallThirdReviewImage.png',
            text: t('eighth__review-first'),
            name: 'Tatyana',
        },
        {
            image: '/static/img/eight/smallFourthReviewImage.png',
            text: t('eighth__review-second'),
            name: 'Sofia',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const sliderRef = useRef();
    const startX = useRef(0);

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleDragStart = (e) => {
        setDragging(true);
        startX.current = e.clientX || e.touches[0].clientX;
    };

    const handleDragMove = (e) => {
        if (!dragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startX.current - currentX;

        if (diff > 50) {
            handleNext();
            setDragging(false);
        } else if (diff < -50) {
            handlePrev();
            setDragging(false);
        }
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    return (
        <div
            className={classes.slider}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd} 
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
        >
            <div className={classes.slider__content}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${classes['slider-item']} ${
                            currentIndex === index
                                ? classes['slider-item-active']
                                : ''
                        }`}
                    >
                        <EightItem {...item} />
                    </div>
                ))}
            </div>
            <div className={classes.slider__wrapper}>
                <button
                    onClick={handlePrev}
                    style={{ cursor: "pointer", opacity: currentIndex === 0 ? ".6" : "1" }}
                >
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L1 9L9 17" stroke="white" />
                    </svg>
                </button>
                <div className={classes.pagination}>
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`${classes.bullet} ${
                                currentIndex === index ? classes['bullet-active'] : ''
                            }`}
                        ></div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    style={{ cursor: "pointer", opacity: currentIndex === items.length - 1 ? ".6" : "1" }}
                >
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9L1 17" stroke="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EightSlider;
