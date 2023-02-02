import styles from '../../styles/pages/AuthPages/LoginPage.module.scss'
import Header from "../../appComponents/Logic/Meta/Header";
import LoginComponent from '../../appComponents/Logic/Auth/Login';

export default function Login() {

    return (
      <>
        <Header description='Auth' />
        <div className={styles.register}>
          <LoginComponent/>
        </div>
      </>
    )
  }