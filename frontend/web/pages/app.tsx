import Header from '../appComponents/Logic/Meta/Header';
import styles from '../../styles/pages/Home.module.scss';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { JwtCheck } from '../appComponents/Logic/Data/JwtCheck';


 //Страничка загрузки данных
export default function App() {
    const Router = useRouter()
    const [isLoadingData, setIsLoadingData] = useState(false)
    const token = ''

    useEffect(() => {
    (async () => {
        const data = JwtCheck({token})
        console.log(data)
        setIsLoadingData(true)
    })()
    }, [])

    if (isLoadingData == true) {
        const RouterPushed = () => {
            Router.push('/')    
        } 
        setTimeout(RouterPushed, 4000)
    }

   
    return (
        <>

        </>
    )
}