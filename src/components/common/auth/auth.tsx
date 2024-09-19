import { useState } from 'react'
import Button from 'src/components/ui/button'
import Modal from 'src/components/ui/modal/modal'
import './auth.styles.css'
import { TActiveAuth } from './types'
import { Login } from './login'
import { Signup } from './signup'
import { useAppSelector } from '../../../store/hooks'
import { ExitAccount } from './exitAccount'

const Auth = () => {
  const modalWindowCanOpen = useAppSelector (state => state.auth.authModalCanOpen)

  const [isOpenModal, setIsOpenModal] = useState<boolean> (false)
  const [isActive, setIsActive] = useState<TActiveAuth> ('login')

  const handleClick = () => {
    setIsOpenModal (true)
  }

  const handleChangeAuth = (value: TActiveAuth) => {
    setIsActive (value)
    // setIsActive((prev) => !prev);
  }

  const handleCloseModal = () => {
    setIsOpenModal (false)
  }

  const handleSubmitAuth = (values) => {
    console.log (values)
  }

  const handleLogout = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button.Icon
        className='links__button'
        icon='Login'
        onClick={handleClick}
      />
      {modalWindowCanOpen ?
        <Modal
          isOpen={isOpenModal && modalWindowCanOpen}
          onCloseModal={handleCloseModal}
          className='modal-auth'
          size='full'
        >
          <div className='auth'>
            <div className='auth__img' />
            {isActive === 'login' ? (
              <Login
                onChangeAuth={handleChangeAuth}
                onSubmit={handleSubmitAuth}
              />
            ) : (
              <Signup
                onChangeAuth={handleChangeAuth}
                onSubmit={handleSubmitAuth}
              />
            )}
          </div>
        </Modal> :
        <ExitAccount onLogout={handleLogout}/>
      }
    </>
  )
}

export default Auth
