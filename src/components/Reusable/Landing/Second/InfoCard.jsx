import classes from "../../../../styles/componentStyles/Landing/second.module.scss";

const InfoCard = ({subtitle, text, src, imageClasses}) => {
    return (
        <div className={classes.infoCard}>
            <div className={`${classes.infoCard__image} ${imageClasses}`}>
                <img src={src} alt={src} width={"100%"} height={"100%"} />
            </div>
            <div className={classes.infoCard__bottom}>
                <h3>{subtitle}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default InfoCard