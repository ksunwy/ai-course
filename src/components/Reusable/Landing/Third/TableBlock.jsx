import classes from "../../../../styles/componentStyles/Landing/third.module.scss";

const TableBlock = ({ borderRight, borderBottom, borderLeft, subtitle, text }) => {
  return (
    <div className={classes.block} style={{ borderLeft: borderLeft && "none", borderBottom: borderBottom && "none", borderRight: borderRight && "none" }}>
        <h4>{subtitle}</h4>
        <p>{text}</p>
    </div>
  )
}

export default TableBlock