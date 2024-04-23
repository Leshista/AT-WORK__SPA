import classes from './css/Header.module.css'
import { logo, like, notification } from '../UI/icons'
import me from '../UI/images/me.jpg'

const Header = () => {

    return (
        <header className={classes.header}>
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
        </header>
    )
}

export default Header