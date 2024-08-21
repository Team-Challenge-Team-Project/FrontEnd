import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Icon, { IconType } from '../../icon';
import { Link } from 'react-router-dom';

export type TIconButtonProps = {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  icon?: IconType;
  to: string;
  children?: ReactNode;
};

export const LinkButton: FC<TIconButtonProps> = ({
  className,
  isActive = false,
  isDisabled = false,
  onClick,
  icon = '',
  to = '/',
  children,
}) => {
  return (
    <Link
      to={to}
      className={clsx('button-icon', className, {
        'is-active': isActive,
        'is-disabled': isDisabled,
      })}
      onClick={onClick as never}
      tabIndex={isDisabled ? -1 : undefined}
    >
      {icon && <Icon type={icon} />}
      {children}
    </Link>
  );
};
