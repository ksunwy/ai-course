import classes from "../../../../styles/componentStyles/Landing/fifth.module.scss";


const SliderItem = ({ image, title, subtitle, desc, goNext, goPrev, activeIndex, secondDesc, isThird }) => {
    return (
        <div className={classes.fifth__first}>
            {isThird && (
                <div className={`${classes.fifth__first__left} mobile`}>
                    <img src={'/static/img/fifth/fifthThirdImage.png'} alt="image" width={"100%"} height={"100%"} />
                </div>
            )}
            <div className={`${classes.fifth__first__left} ${isThird && "desktop"}`}>
                <img src={image} alt="image" width={"100%"} height={"100%"} />
            </div>
            <div className={classes.fifth__first__right}>
                <div className={classes.fifth__first__right__top}>
                    <h3>{title}</h3>
                    <div className={classes.fifth__first__right__top__second}>
                        <h4>{subtitle}</h4>
                        <div className={classes.fifth__first__right__top__second__line} />
                    </div>
                    <p>{desc}</p>
                    {secondDesc && <p>{secondDesc}</p>}
                </div>
                <div className={classes.fifth__first__right__bottom}>
                    <button onClick={goPrev} style={{cursor: "pointer", opacity: activeIndex === 0 && ".6"}}>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L1 9L9 17" stroke="white" />
                        </svg>
                    </button>
                    <div className={classes.pagination}>
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className={`${classes.bullet} ${activeIndex === index ? classes['bullet-active'] : ''}`}
                            ></div>
                        ))}
                    </div>
                    <button onClick={goNext} style={{cursor: "pointer", opacity: activeIndex === 4 && ".6"}}>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 9L1 17" stroke="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SliderItem