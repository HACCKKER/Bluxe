import Header from '../appComponents/Logic/Meta/Header';
import styles from '../../styles/pages/Home.module.scss';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { JwtCheck } from '../appComponents/Logic/Data/JwtCheck';

export default function App() {
    const Router = useRouter()
    const [isLoadingData, setIsLoadingData] = useState(false)
    const token = ''

    // useEffect(() => {
    //     if(token) {
    //         useEffect(() => {
    //             (async () => {
    //                 const data = JwtCheck({token})
    //                 setIsLoadingData(true)
    //             })()
    //         }, [])
    //     } else {
    //         Router.push('/auth/login')    
    //     }

    //     if (isLoadingData == true) {
    //         Router.push('/channels/@me')    
    //     }        
    // }, [])

    return (
        <>
            <Header description='Bluxe' title_description='Авторизация'/>
        </>
    )
}