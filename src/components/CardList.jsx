import classes from './css/CardList.module.css'
import Card from './Card'

const CardList = ({ category }) => {
    return (
    <section className={classes.cardList__section}>
        <h1 className={classes.cardList__title}>{category === 'active' ? 'Активные' : 'Архив'}</h1>
        <div className={classes.cardList__wrapper}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
    )
}

export default CardList;