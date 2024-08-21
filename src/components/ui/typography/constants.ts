import clsx from 'clsx';
import { ETypographyVariant } from './enums';

export const TYPOGRAPHY_VARIANTS = () => {
  return {
    // h1
    [ETypographyVariant.H1Bold]: clsx('Typography text-h1 text-bold'),
    [ETypographyVariant.H1Medium]: clsx('Typography text-h1 text-medium'),
    [ETypographyVariant.H1BoldHeading]: clsx(
      'Typography text-h1 text-bold heading'
    ),
    [ETypographyVariant.H1MediumHeading]: clsx(
      'Typography text-h1 text-medium heading'
    ),

    // h2
    [ETypographyVariant.H2Bold]: clsx('Typography text-h2 text-bold'),
    [ETypographyVariant.H2Medium]: clsx('Typography text-h2 text-medium'),
    [ETypographyVariant.H2Regular]: clsx('Typography text-h2 text-regular'),
    [ETypographyVariant.H2BoldHeading]: clsx(
      'Typography text-h2 text-bold heading '
    ),
    [ETypographyVariant.H2MediumHeading]: clsx(
      'Typography text-h2 text-medium heading'
    ),
    [ETypographyVariant.H2RegularHeading]: clsx(
      'Typography text-h2 text-regular heading'
    ),

    //h3
    [ETypographyVariant.H3Medium]: clsx('Typography text-h3 text-medium'),
    [ETypographyVariant.H3Regular]: clsx('Typography text-h3 text-regular'),

    // text
    [ETypographyVariant.TextRegular]: clsx('Typography text-regular'),
    [ETypographyVariant.TextMedium]: clsx('Typography text-medium'),
    [ETypographyVariant.TextS18Medium]: clsx('Typography text-medium font18'),
    [ETypographyVariant.TextS18Regular]: clsx('Typography text-regular font18'),
  };
};
