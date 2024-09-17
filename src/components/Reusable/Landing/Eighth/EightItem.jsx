import classes from "../../../../styles/componentStyles/Landing/eighth.module.scss";

const EightItem = ({ isSecond, text, secondText, image, imageSecond, name, secondName }) => {
    return (
        <div className={classes.mobileReview}>
            {isSecond &&
                <div className={classes.mobileReview__content}>
                    <div className={classes.mobileReview__content__top}>
                        <div className={classes.mobileReview__content__top__left}>
                            <img src={imageSecond} alt="image" width={"100%"} height={"100%"} />
                        </div>
                        <div className={classes.mobileReview__content__top__right}>
                            <div className={classes.mobileReview__content__top__right__name}>
                                <span>{secondName}</span>
                                <div className={classes.mobileReview__content__top__right__name__line} />
                            </div>
                            <svg width="102" height="14" viewBox="0 0 102 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L5.4284 4.83688H0.342604L4.4571 7.82624L2.8855 12.6631L7 9.67376L11.1145 12.6631L9.5429 7.82624L13.6574 4.83688H8.5716L7 0Z" fill="#D9D9D9" />
                                <path d="M29 0L27.4284 4.83688H22.3426L26.4571 7.82624L24.8855 12.6631L29 9.67376L33.1145 12.6631L31.5429 7.82624L35.6574 4.83688H30.5716L29 0Z" fill="#D9D9D9" />
                                <path d="M51 0L52.5716 4.83688H57.6574L53.5429 7.82624L55.1145 12.6631L51 9.67376L46.8855 12.6631L48.4571 7.82624L44.3426 4.83688H49.4284L51 0Z" fill="#D9D9D9" />
                                <path d="M73 0L71.4284 4.83688H66.3426L70.4571 7.82624L68.8855 12.6631L73 9.67376L77.1145 12.6631L75.5429 7.82624L79.6574 4.83688H74.5716L73 0Z" fill="#D9D9D9" />
                                <path d="M95 0L93.4284 4.83688H88.3426L92.4571 7.82624L90.8855 12.6631L95 9.67376L99.1145 12.6631L97.5429 7.82624L101.657 4.83688H96.5716L95 0Z" fill="#D9D9D9" />
                            </svg>
                        </div>
                    </div>
                    <div className={classes.mobileReview__content__main}>
                        {secondText.map((el, i) => (
                            <p key={i} className={classes.mobileReview__content__bottom}>{el}</p>
                        ))}
                    </div>
                </div>
            }
            <div className={classes.mobileReview__content}>
                <div className={classes.mobileReview__content__top}>
                    <div className={classes.mobileReview__content__top__left}>
                        <img src={image} alt="image" width={"100%"} height={"100%"} />
                    </div>
                    <div className={classes.mobileReview__content__top__right}>
                        <div className={classes.mobileReview__content__top__right__name}>
                            <span>{name}</span>
                            <div className={classes.mobileReview__content__top__right__name__line} />
                        </div>
                        <svg width="102" height="14" viewBox="0 0 102 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0L5.4284 4.83688H0.342604L4.4571 7.82624L2.8855 12.6631L7 9.67376L11.1145 12.6631L9.5429 7.82624L13.6574 4.83688H8.5716L7 0Z" fill="#D9D9D9" />
                            <path d="M29 0L27.4284 4.83688H22.3426L26.4571 7.82624L24.8855 12.6631L29 9.67376L33.1145 12.6631L31.5429 7.82624L35.6574 4.83688H30.5716L29 0Z" fill="#D9D9D9" />
                            <path d="M51 0L52.5716 4.83688H57.6574L53.5429 7.82624L55.1145 12.6631L51 9.67376L46.8855 12.6631L48.4571 7.82624L44.3426 4.83688H49.4284L51 0Z" fill="#D9D9D9" />
                            <path d="M73 0L71.4284 4.83688H66.3426L70.4571 7.82624L68.8855 12.6631L73 9.67376L77.1145 12.6631L75.5429 7.82624L79.6574 4.83688H74.5716L73 0Z" fill="#D9D9D9" />
                            <path d="M95 0L93.4284 4.83688H88.3426L92.4571 7.82624L90.8855 12.6631L95 9.67376L99.1145 12.6631L97.5429 7.82624L101.657 4.83688H96.5716L95 0Z" fill="#D9D9D9" />
                        </svg>
                    </div>
                </div>
                <div className={classes.mobileReview__content__main}>
                        {text.map((el, i) => (
                            <p key={i} className={classes.mobileReview__content__bottom}>{el}</p>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default EightItem