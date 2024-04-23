import { Outlet } from 'react-router-dom'
import classes from './css/Index.module.css'
import Header from '../components/Header'

const Index = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Index