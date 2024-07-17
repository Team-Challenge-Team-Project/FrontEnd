import InternalCheckbox from './checkbox';
import CheckboxGroup from './components/checkboxGroup';

const Checkbox = InternalCheckbox as typeof InternalCheckbox & {
  Group: typeof CheckboxGroup;
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
