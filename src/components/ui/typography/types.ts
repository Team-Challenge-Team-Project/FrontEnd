import { MouseEvent, ReactNode } from 'react';
import { ETypographyVariant } from './enums';

export type TTypographyVariants = 'h1' | 'h2' | 'h3' | 'span' | 'p';

export type TTypographyWeight = 'bold' | 'medium' | 'regular';

export type TColor = 'primary' | 'white' | 'red';

export type TSize = 16 | 18 | 21 | 35;

export type TTypographyProps = {
  as?: TTypographyVariants;
  children?: ReactNode;
  color?: TColor | ReactNode;
  size?: TSize;
  weight?: TTypographyWeight;
  htmlFor?: string;
  className?: string;
  variant?: ETypographyVariant;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};
