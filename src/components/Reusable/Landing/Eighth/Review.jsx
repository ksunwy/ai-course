import classes from "../../../../styles/componentStyles/Landing/eighth.module.scss";

const Review = ({ image, reviewClasses, imageClasses, name, array }) => {
    return (
        <div className={`${classes.review} ${reviewClasses}`}>
            <div className={`${classes.review__top}`}>
                <div className={classes.review__top__name}>
                    <h4>{name}</h4>
                    <div className={classes.review__top__name__line} />
                </div>
                <div className={classes.review__top__text}>
                    <div className={`${classes.review__top__text__image} ${imageClasses}`}>
                        <img src={image} alt="image" width={"100%"} height={"100%"} className={imageClasses} />
                    </div>
                    <div className={classes.review__top__text__main}>
                        {array.map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                    </div>
                </div>
            </div>
            <svg width="160" height="24" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#D9D9D9" />
                <path d="M46 0L48.6942 8.2918H57.4127L50.3593 13.4164L53.0534 21.7082L46 16.5836L38.9466 21.7082L41.6407 13.4164L34.5873 8.2918H43.3058L46 0Z" fill="#D9D9D9" />
                <path d="M80 0L82.6942 8.2918H91.4127L84.3593 13.4164L87.0534 21.7082L80 16.5836L72.9466 21.7082L75.6407 13.4164L68.5873 8.2918H77.3058L80 0Z" fill="#D9D9D9" />
                <path d="M114 0L116.694 8.2918H125.413L118.359 13.4164L121.053 21.7082L114 16.5836L106.947 21.7082L109.641 13.4164L102.587 8.2918H111.306L114 0Z" fill="#D9D9D9" />
                <path d="M148 0L150.694 8.2918H159.413L152.359 13.4164L155.053 21.7082L148 16.5836L140.947 21.7082L143.641 13.4164L136.587 8.2918H145.306L148 0Z" fill="#D9D9D9" />
            </svg>
        </div>
    );
}

export default Review;
