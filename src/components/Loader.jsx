import classes from './css/Loader.module.css'

const Loader = () => {
    return (
        <>
            <div className={classes.loader__wrapper}>
                <div className={classes.loader}></div>
            </div>
        </>
    )
}

export default Loader;