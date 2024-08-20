import { FC } from 'react';
import clsx from 'clsx';
import { TTypographyProps } from './types';
import { TYPOGRAPHY_VARIANTS } from './constants';
import { ETypographyVariant } from './enums';

const Typography: FC<TTypographyProps> = ({
  as = 'span',
  children,
  className,
  color,
  size,
  weight,
  variant = ETypographyVariant.TextRegular,
  htmlFor,
  ...rest
}) => {
  const currentVariant = TYPOGRAPHY_VARIANTS()[variant];
  const Tag = as as keyof JSX.IntrinsicElements;

  const props: Record<string, unknown> = {
    className: clsx(className, currentVariant, {
      [`text-${color}`]: color,
      [`text-${weight}`]: weight,
      [`text-${size}`]: size,
    }),
    ...rest,
  };

  if (Tag === 'label' && htmlFor) {
    props.htmlFor = htmlFor;
  }

  return <Tag {...props}>{children}</Tag>;
};

export default Typography;
