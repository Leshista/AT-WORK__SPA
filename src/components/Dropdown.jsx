import classes from './css/Dropdown.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { peopleActions } from '../store/peopleSlice'

const Dropdown = ({ username, id, status }) => {
    // Работаем со статусом людей,
    // назначаю его на id-1 т.к. айди людей
    // начинается не с 0 а с 1 в полученных с
    // сервера данных
    const dispatch = useDispatch();
    const activateToggler = () => {
        dispatch(peopleActions.setStatusActive(id-1))
    }
    const archivateToggler = () => {
        dispatch(peopleActions.setStatusArchive(id-1))
    }
    const hideToggler = () => {
        dispatch(peopleActions.setStatusHidden(id-1))
    }

    return (
        <div className={classes.dropdown}>
            {/*Показываю два разных dropdown в зависимости
                от того к какой категории относится */}
            {status === 'active' && <ul className={classes.dropdown__list}>
                
                <Link to={username}><li className={classes.dropdown__item}>Редактировать</li></Link>
                <li className={classes.dropdown__item} onClick={archivateToggler}>Архивировать</li> 
                <li className={classes.dropdown__item} onClick={hideToggler}>Скрыть</li> 
            </ul>}
            {status === 'archive' && <ul className={classes.dropdown__list}>
                <li className={classes.dropdown__item} onClick={activateToggler}>Активировать</li> 
            </ul>}
        </div>
    )
}

export default Dropdown;