import { DOMAttributes, FC, MouseEvent, ReactNode } from 'react';
import { TButton, TClasses } from './types';
import Icon, { IconType } from '../icon';

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  icon?: IconType;
  classes?: TClasses;
  type?: TButton;
}

const Button: FC<IButtonProps> = ({
  icon,
  // isActive = true,
  isDisabled = false,
  children,
  classes,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      // data-value={children}
      className={classes?.button}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
      {icon && <Icon className={classes?.icon} type={icon} />}
    </button>
  );
};
export default Button;
