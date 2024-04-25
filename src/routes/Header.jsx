import { Suspense, useEffect, useState } from 'react';
import { Outlet} from 'react-router-dom'
import classes from './css/Header.module.css'
import { logo, like, notification } from '../UI/icons'
import me from '../UI/images/me.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeopleData } from '../store/peopleActions'
import Loader from '../components/Loader';

const Header = () => {
    const dispatch = useDispatch();
    const people = useSelector(state => state.people.people)
    const [fetched, setIsFetched] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchPeopleData(people))
            setIsFetched(true)
        }
        fetchData()
    },[fetched])
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
                {fetched ? <Outlet /> : <Loader />}
            </div>
        </>

    )
}

export default Header