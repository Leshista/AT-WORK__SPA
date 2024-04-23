import classes from './css/Card.module.css'

const Card = () => {
    return (
        <div className={classes.card}>
            <img className={classes.card__image}></img>
            <div className={classes.cardRight__wrapper}>
                <div className={classes.cardRight__topWrapper}>
                    <h2 className={classes.card__title}></h2>
                    <h3 className={classes.card__subtitle}></h3>
                </div>
                <div className={classes.cardRightm__bottomWrapper}>
                    <p className={classes.card__city}></p>
                </div>
            </div>
        </div>
    )
}

export default Card