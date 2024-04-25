import { Suspense, useEffect, useState } from 'react';
import { Outlet} from 'react-router-dom'
import classes from './css/Header.module.css'
import { logo, like, notification } from '../UI/icons'
import me from '../UI/images/me.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleData } from '../store/peopleActions'
import Loader from '../components/Loader';

const Header = () => {
    // Здесь я fetch'ю данные с сервера, ожидаю их прибытие
    // и только когда всё готово меняю state на isFetched
    const dispatch = useDispatch();
    const people = useSelector(state => state.people.people)
    const [isFetched, setIsFetched] = useState(false)
    useEffect(() => {
        // Несмотря на то, что ESLinter говорит мне,
        // что async await тут бессмысленны, однако
        // только благодаря ним UseEffect действительно
        // ждёт, пока вся дата придёт, и только потом
        // меняет state
        const fetchData = async () => {
            await dispatch(fetchPeopleData(people))
            setIsFetched(true)
        }
        fetchData()
    }, [])
    
    return (
        <>
            <header className={classes.header}>
                <div className={classes.container}>
                    <div className={classes.header__wrapper}>
                        <div className={`${classes.logo} ${classes.wrapper}`}>
                            <div className={classes.logo__image}>{logo}</div>
                            <span className={classes.logo__text}>at-<b>work</b></span>
                        </div>
                        <div className={`${classes.headerActions__wrapper} ${classes.wrapper}`}>
                            <div className={`${classes.headerActions} ${classes.wrapper}`}>
                                <div className={classes.like}>{like}</div>
                                <div className={classes.notification}>{notification}</div>
                            </div>
                            <div className={`${classes.user} ${classes.wrapper}`}>
                                <img src={me} className={classes.user__image}></img>
                                <span className={classes.user__name}>Leshista</span>
                            </div>
                        </div>
                        </div>
                    </div>
            </header>
            <div className={classes.container}>
                {/*Показываем louder если не загрузилось, 
                    Контент если загрузилось */}
                {isFetched ? <Outlet /> : <Loader />}
            </div>
        </>

    )
}

export default Header