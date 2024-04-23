import classes from './css/Details.module.css'
import { Link } from 'react-router-dom'
import { back } from '../UI/icons'
import me from '../UI/images/me.jpg'

const Details = () => {
    return (
        <>
            <Link to={'/AT-WORK__SPA/'}>
                <div className={classes.back__wrapper}>
                    <div className={classes.back__icon}>{back}</div>
                    <span className={classes.back__text}>Назад</span>
                </div>
            </Link>
            <article className={classes.details}>
                <section className={classes.leftBlock}>
                    <div className={classes.leftBlock__wrapper}>
                        <img src={me} className={classes.details__image}></img>
                        <p className={classes.details__option}>Данные профиля</p>
                        <p className={classes.details__option}>Рабочее пространство</p>
                        <p className={classes.details__option}>Приватность</p>
                        <p className={classes.details__option}>Безопасность</p>
                    </div>
                </section>
            </article>
            <article className={classes.details}>
                <section className={classes.rightBlock}>
                    <div className={classes.rightBlock__wrapper}>
                        <h1 className={classes.details__title}>Данные профиля</h1>
                        <form className={classes.form}>
                            <label className={classes.form__label} htmlFor='name'>Имя</label>
                            <input className={classes.form__input} id='name' type='text' placeholder='Иван'></input>

                            <label className={classes.form__label} htmlFor='alias'>Никнейм</label>
                            <input className={classes.form__input} id='alias' type='text' placeholder='Ivan1234'></input>

                            <label className={classes.form__label} htmlFor='email'>Почта</label>
                            <input className={classes.form__input} id='email' type='email' placeholder='Ivan1234@mail.ru'></input>

                            <label className={classes.form__label} htmlFor='city'>Город</label>
                            <input className={classes.form__input} id='city' type='text' placeholder='Санкт-Петербург'></input>

                            <label className={classes.form__label} htmlFor='phone'>Телефон</label>
                            <input className={classes.form__input} id='phone' type='phone' placeholder='8 (999) 111-23-23'></input>

                            <label className={classes.form__label} htmlFor='company'>Название компании</label>
                            <input className={classes.form__input} id='company' placeholder='AT-WORK'></input>

                            <input className={classes.form__submit} type='submit'></input>
                        </form>
                    </div>
                </section>
            </article>
        </>
    )
}

export default Details