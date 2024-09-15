import classes from "../../../../styles/componentStyles/Landing/fourth.module.scss";

const FourthDescription = ({id, subtitle, text}) => {
  return (
    <div className={classes.item}>
        <span>{id}/</span>
        <div className={classes.item__right}>
            <h4 className={classes.item__right__title}>{subtitle}</h4>
            <p className={classes.item__right__text}>{text}</p>
        </div>
    </div>
  )
}

export default FourthDescription