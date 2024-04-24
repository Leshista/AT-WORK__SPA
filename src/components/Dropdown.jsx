import classes from './css/Dropdown.module.css'
import { Link } from 'react-router-dom';

const Dropdown = ({isArchived}) => {
    return (
        <div className={classes.dropdown}>
            {!isArchived && <ul className={classes.dropdown__list}>
                
                <Link to='123'><li className={classes.dropdown__item}>Редактировать</li></Link>
                <li className={classes.dropdown__item}>Архивировать</li> 
                <li className={classes.dropdown__item}>Скрыть</li> 
            </ul>}
            {isArchived && <ul className={classes.dropdown__list}>
                <li className={classes.dropdown__item}>Активировать</li> 
            </ul>}
        </div>
    )
}

export default Dropdown;