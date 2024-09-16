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
    const [prevIndex, setPrevIndex] = useState(null);
    const sliderRef = useRef();
    
    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setPrevIndex(currentIndex);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleDragStart = (e) => {
        sliderRef.current = { startX: e.clientX, timestamp: Date.now() };
    };

    const handleDragEnd = (e) => {
        if (!sliderRef.current) return;
        const distanceX = e.clientX - sliderRef.current.startX;
        const timeDiff = Date.now() - sliderRef.current.timestamp;

        if (distanceX < -50 && timeDiff < 300) {
            handleNext();
        } else if (distanceX > 50 && timeDiff < 300) {
            handlePrev();
        }

        sliderRef.current = null;
    };

    return (
        <div
            className={classes.slider}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
        >
            <div className={classes.slider__content}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${classes['slider-item']} ${
                            currentIndex === index
                                ? classes['slider-item-active']
                                : prevIndex === index
                                ? classes['slider-item-exit']
                                : ''
                        }`}
                    >
                        <EightItem {...item} />
                    </div>
                ))}
            </div>
            <div className={classes.slider__wrapper}>
                <button onClick={handlePrev} style={{cursor: "pointer", opacity: currentIndex === 0 && ".6"}}>
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
                <button onClick={handleNext} style={{cursor: "pointer", opacity: currentIndex === 2 && ".6"}}>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9L1 17" stroke="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EightSlider;
