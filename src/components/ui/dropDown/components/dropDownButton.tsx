import { FC } from 'react';
import { useDropDownContext } from 'src/hooks/useDropDown';
import clsx from 'clsx';
import { TDropDownButtonProps } from '../types';
import { EDropDownButtonTrigger } from '../enums';
import Icon from '../../icon';

const DropDownButton: FC<TDropDownButtonProps> = ({
  children,
  classes,
  icon,
}) => {
  const dropDownState = useDropDownContext();

  const buttonProps = {
    onClick:
      EDropDownButtonTrigger.Click === dropDownState?.trigger
        ? dropDownState?.onClickButtonDropDown
        : () => {},
    onMouseOver:
      EDropDownButtonTrigger.Hover === dropDownState?.trigger
        ? dropDownState?.onHoverOverButtonDropDown
        : () => {},
    onMouseLeave:
      EDropDownButtonTrigger.Hover === dropDownState?.trigger
        ? dropDownState?.onHoverLeaveButtonDropDown
        : () => {},
    ref: dropDownState?.refButtonDropDown,
    className: clsx('dropdown__button', classes?.dropDownButton),
  };

  return (
    <div {...buttonProps}>
      {children}{' '}
      {icon && <Icon type={icon} className={classes?.dropdownButtonIcon} />}
    </div>
  );
};

export default DropDownButton;
