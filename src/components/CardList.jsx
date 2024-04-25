import classes from './css/CardList.module.css'
import Card from './Card'
import { useSelector } from 'react-redux'

const CardList = ({ category }) => {
    // Получаем список людей из redux store
    const people = useSelector(state => state.people.people)

    return (
    <section className={classes.cardList__section}>
            <h1 className={classes.cardList__title}>{category === 'active' ? 'Активные' : 'Архив'}</h1>
            {/*И рассовываем их по двум разделам
                в зависимости от их статуса */}
            <div className={classes.cardList__wrapper}>
                {category === 'active' && people.map(person => person.status === 'active' && <Card
                    key={person.id}
                    id={person.id}
                    username={person.username}
                    company={person.company['name']}
                    city={person.address['city']}
                    status={person.status} />)}
                {category === 'archive' && people.map(person => person.status === 'archive' && <Card
                    key={person.id} 
                    id={person.id}
                    username={person.username}
                    company={person.company['name']}
                    city={person.address['city']}
                    status={person.status} />)}
        </div>
    </section>
    )
}

export default CardList;