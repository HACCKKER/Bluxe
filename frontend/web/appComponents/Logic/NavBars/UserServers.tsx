import styles from '../../../../styles/appComponents/UiApp/NavBars/AppNavBar.module.scss';
import { FC } from 'react'
import { IServers } from './Interface/NavBar.interface';

const UserServers: FC<IServers> = ({User_Servers}) => {
    if (User_Servers) {
        return <></>
    } else {
        return <></>
    }
}
export default UserServers