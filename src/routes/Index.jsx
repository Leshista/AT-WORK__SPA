import classes from './css/Index.module.css'
import CardList from '../components/CardList'

const Index = () => {

    return (
        <main className={classes.main}>
            <CardList category='active'/>
            <CardList category='archive' />
        </main>
    )
}

export default Index