import classes from './css/Details.module.css'
import { Link } from 'react-router-dom'
import { back } from '../UI/icons'
import me from '../UI/images/me.jpg'
import PopUp from '../components/PopUp'
import { useState } from 'react'

const Details = () => {
    const [popUpIsVisible, setPopUpIsVisible] = useState(false);
    const activatePopUpHandler = () => {
        setPopUpIsVisible(true)
    }
    const deactivatePopUpHandler = () => {
        setPopUpIsVisible(false)
    }
    const deactivatePopUpOnTimer = () => {
        popUpIsVisible && setTimeout(() => {
            setPopUpIsVisible(false)
        }, 4000);
    }
    deactivatePopUpOnTimer()

    return (
        <>
            <div className={classes.details__wrapper}>
                <Link to={'/AT-WORK__SPA/'}>
                    <div className={classes.back__wrapper}>
                        <div className={classes.back__icon}>{back}</div>
                        <span className={classes.back__text}>Назад</span>
                    </div>
                </Link>
                <article className={classes.details}>
                    <section className={classes.details__block}>
                        <img src={me} className={classes.details__image}></img>
                        <ul className={classes.details__list}>
                            <li className={`${classes.details__item} ${classes.details__item_active}`}>Данные профиля</li>
                            <li className={classes.details__item}>Рабочее пространство</li>
                            <li className={classes.details__item}>Приватность</li>
                            <li className={classes.details__item}>Безопасность</li>
                        </ul>
                    </section>
                    <section className={classes.details__block}>
                        <h1 className={classes.details__title}>Данные профиля</h1>
                        <form className={classes.form}>
                            <div className={classes.form__item}>
                                <label className={classes.form__label} htmlFor='name'>Имя</label>
                                <input className={classes.form__input} id='name' type='text' placeholder='Иван' required></input>
                            </div>

                            <div className={classes.form__item}>
                                <label className={classes.form__label} htmlFor='alias'>Никнейм</label>
                                <input className={classes.form__input} id='alias' type='text' placeholder='Ivan1234' required></input>
                            </div>

                            <div className={classes.form__item}>
                                <label className={classes.form__label} htmlFor='email'>Почта</label>
                                <input className={classes.form__input} id='email' type='email' placeholder='Ivan1234@mail.ru' required></input>
                            </div>

                            <div className={classes.form__item}>
                                <label className={classes.form__label} htmlFor='city'>Город</label>
                                <input className={classes.form__input} id='city' type='text' placeholder='Санкт-Петербург' required></input>
                            </div>

                            <div className={classes.form__item}>
                                <label className={classes.form__label} htmlFor='phone'>Телефон</label>
                                <input className={classes.form__input} id='phone' type='phone' placeholder='8 (999) 111-23-23' required></input>
                            </div>

                            <div className={classes.form__item}>
                                <label className={classes.form__label} htmlFor='company'>Название компании</label>
                                <input className={classes.form__input} id='company' placeholder='AT-WORK' required></input>
                            </div>

                            <button className={classes.form__submit} type='submit' onClick={activatePopUpHandler}>Сохранить</button>
                        </form>
                    </section>
                </article>
            </div>
            {popUpIsVisible && <PopUp onClose={deactivatePopUpHandler} />}
        </>
    )
}

export default Details