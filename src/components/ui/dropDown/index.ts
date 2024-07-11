import DropDownButton from './components/dropDownButton';
import DropDownPanel from './components/dropDownPanel';
import InternalDropdown from './dropDown';
import './dropDown.styled.css';
export type * from './types';

const DropDown = InternalDropdown as typeof InternalDropdown & {
  Button: typeof DropDownButton;
  Panel: typeof DropDownPanel;
};

DropDown.Button = DropDownButton;
DropDown.Panel = DropDownPanel;

export default DropDown;
