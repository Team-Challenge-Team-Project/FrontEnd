import clsx from 'clsx';
import { FC } from 'react';
import Icon, { IconType } from '../../icon';
import Button from '..';

export type TIconButtonProps = {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  icon: IconType;
};

export const IconButton: FC<TIconButtonProps> = ({
  className,
  isActive = false,
  isDisabled = false,
  onClick,
  icon,
}) => {
  return (
    <Button
      classes={{ button: clsx('button-icon', className) }}
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={onClick as never}
    >
      <Icon type={icon} />
    </Button>
  );
};
