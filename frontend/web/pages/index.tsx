import Link from 'next/link'
import { useState, useRef} from 'react'
import Header from '../appComponents/Logic/Meta/Header'
import MainNavBar from '../appComponents/Ui/NavBars/MainNavBar/MainNavBar'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  const [MenuActive, setMenuActive] = useState(false);
  const [ErrorInputUsername, setErrorInputUsername] = useState(false)
  const InputUsername = useRef(null)

  const ValidateUsernameInput = () => {
    if (InputUsername.current.value) {
      console.log(InputUsername.current.value)
      setErrorInputUsername(false)
    } else {
      setErrorInputUsername(true)
    }
  }
  return (
    <>
      <Header description='Bluxe' title_description='Ваше место для общения и отдыха' />
      <div className={styles.MainContainer}>
        <div className={styles.HeaderContainer}>
          <MainNavBar />
          <div className={styles.HeroContainer}>
            <div className={styles.HeroBody}>
              <div className={styles.HeroText}>
                <h1 className={styles.h1}>
                  ПРЕДСТАВЬТЕ СЕБЕ…
                </h1>
                <div className={styles.HeroSubtitle}>
                    <a>…место, где будет комфортно себя чувствовать любая компания: школьный кружок, игровая группа или международное сообщество художников. Место, где можно вдоволь поболтать с друзьями. 
                    Ежедневное общение ещё никогда не было настолько простым.
                  </a>
                </div>
              </div>
              {
              MenuActive ? 
                <div className={styles.FormContainer}>
                  <form className={styles.Form}>
                    {
                      ErrorInputUsername ?
                        <div className={styles.ErrorTextForm}>
                          <div className={styles.Error}>
                            <a className={styles.ErrorText}>
                              Полегче, дружище. Сначала назовитесь.
                            </a>
                          </div>
                          <svg width="16" height="9" viewBox="0 0 16 9">
                            <path d="M7.99986 9L0.803711 0H15.196L7.99986 9Z" fill="#FFFFFF"></path>
                          </svg>
                        </div>
                      :
                      <></>
                    }
                    <input 
                      type='text' 
                      id='input_username'
                      className={styles.Username} 
                      ref={InputUsername}
                      placeholder='Введите имя пользователя'/>
                    <button 
                      type='button'
                      className={styles.RegisterButton}
                      onClick={ValidateUsernameInput}>
                      <img className={styles.Arrow} src='./assets/Arrow.svg' alt='->' />
                    </button>
                  </form>
                  <div className={styles.DocumentContainer}>
                    <div className={styles.DocumentText}>
                      <a> Регистрируясь, вы соглашаетесь с </a>
                      <Link className={styles.Link} href=''> 
                        Условиями Использования
                      </Link>
                      <a> и </a>
                      <Link className={styles.Link} href=''>
                        Политикой Конфиденциальности
                      </Link>
                      <a> Bluxe</a>
                    </div>
                  </div>
                </div> 
              :             
                <div className={styles.HeaderContainerButton}>
                  <Link 
                    className={styles.ButtonDownload}
                    href='/downloads/distributes/app/installers/latest?channel=stable&platform=win&arch=x86'>
                      <svg width="24" height="24" viewBox="0 0 24 24" className={styles.Icon}>
                        <g fill="currentColor">
                          <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                          <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                        </g>
                      </svg>
                      загрузить для Windows
                  </Link>
                  <button 
                  onClick={() => setMenuActive(true)} 
                  className={styles.ButtonOpenBrowser} 
                  id='ButtonOpenWeb'>
                    <a>Открыть Bluxe в браузере</a>
                  </button>
                </div>
              }
            </div>
          </div>
          <div className={styles.HeaderBackground}>
            <img className={styles.BackgroundImages} src='./assets/Styles.svg' alt='' />
            <img className={styles.ForegroundLeft} src='./assets/Tapok.svg' alt='' />
            <img className={styles.ForegroundRight} src='./assets/Stol.svg' alt='' />
          </div>
        </div>
        <div className={styles.Main}>

        </div>
        <div className={styles.Footer}>

        </div>
      </div>
    </>
  )
}
