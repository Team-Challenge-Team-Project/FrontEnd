import { useAppDispatch } from '../../../../store/hooks';
import { logOut } from '../../../../store/features/authSlice';

interface ExitAccountProps {
  onLogout: () => void;
}

export const ExitAccount = ({ onLogout }: ExitAccountProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logOut());
    onLogout();
  };

  return (
    <button className='exit_account__button' onClick={handleClick}>
      Exit Account
    </button>
  );
};
