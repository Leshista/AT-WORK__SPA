import classes from './css/Card.module.css'
import me from '../UI/images/me.jpg'
import { Dots } from '../UI/icons'
import { useState } from 'react'
import Dropdown from './Dropdown'

const Card = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [dotsColor, setDotsColor] = useState('#161616')
    const toggleDropdownHandler = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }
    const dropdownHideHandler = () => {
        setDropdownIsOpen(false)
        setDotsColor('#161616')
    }
    const dotsHoverOnHandler = () => {
        setDotsColor('#22a0bc')
    }
    const dotsHoverOffHandler = () => {
        dropdownIsOpen ? setDotsColor('#595959') : setDotsColor('#161616')
    }

    return (
            <div className={classes.card} onMouseLeave={dropdownHideHandler}>
                <img src={me} className={classes.card__image}></img>
                <div className={classes.cardRight__wrapper}>
                    <div className={classes.cardRight__topWrapper}>
                        <h2 className={classes.card__title}>123</h2>
                        <h3 className={classes.card__subtitle}>123</h3>
                    </div>
                    <div className={classes.cardRightm__bottomWrapper}>
                        <p className={classes.card__city}>123</p>
                    </div>
                    <div className={classes.dropdown__wrapper}>
                    <div className={classes.dots} onClick={toggleDropdownHandler} onMouseEnter={dotsHoverOnHandler} onMouseLeave={dotsHoverOffHandler}><Dots fill={dotsColor} /></div>
                    {dropdownIsOpen && <Dropdown isArchived={false} />}
                    </div>
                </div>
            </div>
    )
}

export default Card