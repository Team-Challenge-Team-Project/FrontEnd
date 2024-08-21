export type * from './types';

import InternalButton from './button';
import { LinkButton } from './components';
import { IconButton } from './components/iconButton';

const Button = InternalButton as typeof InternalButton & {
  Icon: typeof IconButton;
  Link: typeof LinkButton;
};

Button.Icon = IconButton;
Button.Link = LinkButton;

export default Button;
