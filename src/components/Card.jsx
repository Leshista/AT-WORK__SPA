import classes from './css/Card.module.css'
import me from '../UI/images/me.jpg'
import { Dots } from '../UI/icons'
import { useState } from 'react'
import Dropdown from './Dropdown'

const Card = ({ username, company, city, id, status }) => {
    // Так как Dots у меня svg файл лежащий отдельно,
    // приходится менять его стили через state
    const [dotsColor, setDotsColor] = useState('#161616')
    const dotsHoverOnHandler = () => {
        setDotsColor('#22a0bc')
    }
    const dotsHoverOffHandler = () => {
        dropdownIsOpen ? setDotsColor('#595959') : setDotsColor('#161616')
    }
    // Отслеживаем и меняем состояние dropdown
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const toggleDropdownHandler = () => {
        setDropdownIsOpen(!dropdownIsOpen)
        !dropdownIsOpen ? setDotsColor('#595959') : setDotsColor('#161616')
    }
    const dropdownHideHandler = () => {
        setDropdownIsOpen(false)
        setDotsColor('#161616')
    }

    return (
        <div className={classes.card} onMouseLeave={dropdownHideHandler}>
            <img src={me} className={status === 'active' ? classes.card__image : `${classes.card__image} ${classes.card__image_grayscale}`}></img>
            <div className={classes.cardRight__wrapper}>
            <div className={classes.cardRight__topWrapper}>
                <div className={classes.card__titleWrapper}>
                    <h2 className={classes.card__title}>{username}</h2>
                    <div className={classes.dropdown__wrapper}>
                        {/*Отслеживаем размер экрана и меняем
                            размер Dots соответственно */}
                        <div className={classes.dots} onClick={toggleDropdownHandler} onMouseEnter={dotsHoverOnHandler} onMouseLeave={dotsHoverOffHandler}><Dots fill={dotsColor} size={screen.width > 800 ? 24 : 16} /></div>
                        {dropdownIsOpen && <Dropdown status={status} username={username} id={id} />}
                    </div>
                </div>
                <h3 className={classes.card__subtitle}>{company}</h3>
                </div>
                <div className={classes.cardRightm__bottomWrapper}>
                <p className={classes.card__city}>{city}</p>
                </div>
            </div>
        </div>
    )
}

export default Card