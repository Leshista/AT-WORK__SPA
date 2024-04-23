import classes from './css/Index.module.css'
import CardList from '../components/CardList'

const Index = () => {
    return (
        <main className={classes.cardList}>
            <CardList category='active'/>
            <CardList category='archive'/>
        </main>
    )
}

export default Index