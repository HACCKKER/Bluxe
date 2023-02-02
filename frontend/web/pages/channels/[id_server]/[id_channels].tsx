import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../../../appComponents/Logic/Meta/Header';
import AppNavBar from '../../../appComponents/Ui/NavBars/AppNavBar/AppNavBar';
import styles from '../../../styles/pages/AppPages/Channels/Channel.module.scss';

export default function App() {
    const Router = useRouter()
    const { id_server, id_channels } = Router.query
    useEffect(() => {
        console.log(`Server-id: ${id_server}, Channels-id: ${id_channels}`)
    },)            

   
    return (
        <>
            <Header description='Bluxe' title_description={`${id_server} | ${id_channels}`} />
            <main className={styles.wrapper}>
                <AppNavBar />            
            </main>
        </>
    )
}