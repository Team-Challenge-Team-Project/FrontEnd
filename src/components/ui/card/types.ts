import { ReactNode } from 'react';

export type TCardSizeProps = 'x-small' | 'small' | 'middle' | 'large';

export type TCardProps = {
  className?: string;
  coverClassName?: string;
  bodyClassName?: string;
  size?: TCardSizeProps;
  children?: ReactNode;
  cover?: ReactNode;
  body?: ReactNode;
};
