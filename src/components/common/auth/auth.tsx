import { useState } from 'react';
import Button from 'src/components/ui/button';
import Modal from 'src/components/ui/modal/modal';
import './auth.styles.css';
import { TActiveAuth } from './types';
import { Login } from './login';
import { Signup } from './signup';
// import Modal from 'src/components/ui/modal';

const Auth = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<TActiveAuth>('login');
  const handleClick = () => {
    console.log('click');
    setIsOpenModal(true);
  };

  const handleChangeAuth = (value: TActiveAuth) => {
    console.log(value);
    setIsActive(value);
    // setIsActive((prev) => !prev);
  };

  const handleCloseModal = (value) => {
    console.log(value);
    setIsOpenModal(false);
  };

  const handleSubmitAuth = (values) => {
    console.log(values);
  };

  return (
    <>
      <Button.Icon
        className="links__button"
        icon="Login"
        onClick={handleClick}
      />

      <Modal
        isOpen={isOpenModal}
        onCloseModal={handleCloseModal}
        className="modal-auth"
        size="full"
      >
        <div className="auth">
          <div className="auth__img" />
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
      </Modal>
    </>
  );
};

export default Auth;
