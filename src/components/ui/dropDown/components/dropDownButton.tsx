import { FC } from 'react';
import { useDropDownContext } from 'src/hooks/useDropDown';
import clsx from 'clsx';
import { TDropDownButtonProps } from '../types';
import { EDropDownButtonTrigger } from '../enums';

const DropDownButton: FC<TDropDownButtonProps> = ({ children, classes }) => {
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

  return <div {...buttonProps}>{children}</div>;
};

export default DropDownButton;
