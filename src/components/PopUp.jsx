import classes from './css/PopUp.module.css'
import {close, ok} from '../UI/icons'

const PopUp = ({ onClose }) => {
    return (
        <>
            <div className={classes.backdrop}></div>
            <div className={classes.popUp}>
                <div className={classes.popUp__close} onClick={onClose}>{close}</div>
                <div className={classes.popUp__ok}>{ok}</div>
                <p className={classes.popUp__text}>Изменения сохранены!</p>
            </div>
        </>
    )
}

export default PopUp