import { useTranslation } from "react-i18next";
import TableBlock from "../../Reusable/Landing/Third/TableBlock.jsx";
import classes from "../../../styles/componentStyles/Landing/third.module.scss";

const Third = () => {
    const { t } = useTranslation();
    return (
        <section className={classes.third}>
            <div className={classes.third__blur}>
                <div className={classes.third__blur__image}>
                    <img src="/static/img/thirdBlur.png" alt="bg-blur" width={"100%"} height={"100%"} />
                </div>
            </div>
            <div className={classes.third__left}>
                <span>{t('third__desc')} /</span>
                <div className={classes.third__left__table}>
                    <div className={classes.third__left__table__left}>
                        <TableBlock subtitle={t('third__table-first-title')} text={t('third__table-first-desc')} borderRight borderBottom />
                        <div className={classes.third__left__table__left__image}>
                            <img src="/static/img/third/thirdSecondImage.png" alt="image" width={"100%"} height={"100%"} />
                        </div>
                    </div>
                    <div className={classes.third__left__table__right}>
                        <TableBlock subtitle={t('third__table-second-title')} text={t('third__table-second-desc')} borderRight borderBottom />
                        <TableBlock subtitle={t('third__table-third-title')} text={t('third__table-third-desc')} borderBottom borderLeft />
                        <TableBlock subtitle={t('third__table-fourth-title')} text={t('third__table-fourth-desc')} />
                    </div>
                </div>
            </div>
            <div className={classes.third__right}>
                <h2>{t('third__title')}</h2>
                <div className={classes.third__right__table}>
                    <div className={classes.third__right__table__left}>
                        <div className={classes.third__left__table__left__image}>
                            <img src="/static/img/third/thirdFirstImage.png" alt="image" width={"100%"} height={"100%"} />
                        </div>
                        <TableBlock subtitle={t('third__table-fifth-title')} text={t('third__table-fifth-desc')} borderRight />
                        <div className={classes.third__left__table__left__image}>
                            <img src="/static/img/third/thirdThirdImage.png" alt="image" width={"100%"} height={"100%"} />
                        </div>
                    </div>
                    <div className={classes.third__right__table__right}>
                        <TableBlock subtitle={t('third__table-sixth-title')} text={t('third__table-sixth-desc')} borderBottom />
                        <TableBlock subtitle={t('third__table-seventh-title')} text={t('third__table-seventh-desc')} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Third