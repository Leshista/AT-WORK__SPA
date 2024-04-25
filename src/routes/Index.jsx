import { useEffect } from 'react';
import classes from './css/Index.module.css'
import CardList from '../components/CardList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleData } from '../store/peopleActions'

const Index = () => {
    const dispatch = useDispatch();
    const people = useSelector(state => state.people.people)
    useEffect(() => {
        dispatch(fetchPeopleData(people))
    },[])
    return (
        <main className={classes.main}>
            <CardList category='active'/>
            <CardList category='archive' />
        </main>
    )
}

export default Index