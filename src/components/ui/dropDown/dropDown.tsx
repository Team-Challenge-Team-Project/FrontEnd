import clsx from 'clsx';
import { DropDownProvider } from 'src/context/dropDown';
import { useDropDown } from 'src/hooks/useDropDown';
import { TDropDownProps } from './types';
import { EDropDownButtonTrigger } from './enums';

const DropDown = ({
  children,
  classes,
  trigger = EDropDownButtonTrigger.Click,
}: TDropDownProps): JSX.Element => {
  const dropDownState = useDropDown();

  return (
    <DropDownProvider value={{ ...dropDownState, trigger }}>
      <div className={clsx(classes?.dropDown, 'dropdown')}>{children}</div>
    </DropDownProvider>
  );
};

export default DropDown;
