import { memo } from 'react';
import type { FC } from 'react';
import { TTypographyProps } from './types';
import clsx from 'clsx';
import { TYPOGRAPHY_VARIANTS } from './constants';
import { ETypographyVariant } from './enums';

const Component: FC<TTypographyProps> = ({
  as = 'span',
  children,
  className,
  color,
  size,
  weight,
  variant = ETypographyVariant.TextRegular,
  htmlFor,
}) => {
  const currentVariant = TYPOGRAPHY_VARIANTS()[variant];
  const Tag = `${as}` as keyof JSX.IntrinsicElements;

  const props = {
    className: clsx(className, currentVariant, {
      [`text-${color}`]: color,
      [`text-${weight}`]: weight,
      [`text-${as}`]: as,
      [`font-${size}`]: size,
    }),
    htmlFor,
  };

  return <Tag {...props}>{children}</Tag>;
};

export const Typography = memo(Component);
