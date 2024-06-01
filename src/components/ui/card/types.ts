import { ReactNode } from 'react';

export type TCardSizeProps = 'small' | 'middle' | 'large';

export type TPropsCard = {
  className?: string;
  coverClassName?: string;
  bodyClassName?: string;
  size?: TCardSizeProps;
  children?: ReactNode;
  cover?: ReactNode;
  body?: ReactNode;
};
