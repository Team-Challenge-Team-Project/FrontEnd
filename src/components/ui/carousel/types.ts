import { ReactNode } from 'react';

export type TCarouselProps = {
  alt?: string;
  arrows?: boolean;
  className?: string;
  dataTestId?: string;
  dots?: boolean;
  fade?: boolean;
  height?: string;
  images?: string[];
  infinite?: boolean;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  slidesToScroll?: number;
  slidesToShow?: number;
  swipeToSlide?: boolean;
  speed?: number;
  width?: string;
  children: ReactNode;
  dotsClassName?: string;
};
