export type * from './types';

import InternalButton from './button';
import { IconButton } from './components/iconButton';

const Button = InternalButton as typeof InternalButton & {
  Icon: typeof IconButton;
};

Button.Icon = IconButton;

export default Button;
