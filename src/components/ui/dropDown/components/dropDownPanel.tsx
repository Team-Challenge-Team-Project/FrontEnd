import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TRANSITION } from 'src/constants/transition';
import { useDropDownContext } from 'src/hooks/useDropDown';
import clsx from 'clsx';
import { TDropDownPanelProps } from '../types';
import { EDropDownButtonTrigger } from '../enums';

const DropDownPanel: FC<TDropDownPanelProps> = ({
  classes,
  transition,
  menu,
}) => {
  const dropDownState = useDropDownContext();

  const CSSTransitionProps = {
    onMouseOver:
      EDropDownButtonTrigger.Hover === dropDownState?.trigger
        ? dropDownState?.onHoverOverButtonDropDown
        : () => {},
    onMouseLeave:
      EDropDownButtonTrigger.Hover === dropDownState?.trigger
        ? dropDownState?.onHoverLeaveButtonDropDown
        : () => {},
    className: clsx('dropdown__panel', classes?.dropDownPanel),
    in: dropDownState?.isDropDownOpen,
    nodeRef: dropDownState?.refPanelDropDown,
    onClick: dropDownState?.onClickButtonDropDown,
    timeout: transition ?? TRANSITION,
  };

  return (
    <CSSTransition {...CSSTransitionProps} unmountOnExit>
      <div ref={dropDownState?.refPanelDropDown}>{menu}</div>
    </CSSTransition>
  );
};

export default DropDownPanel;
