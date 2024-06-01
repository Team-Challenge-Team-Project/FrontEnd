import './carousel.style.css';
import Slider from 'react-slick';

import { CAROUSEL_SETTINGS } from './settings';
import { TCarouselProps } from './types';

export const Carousel = (props: TCarouselProps) => {
  const { children } = props;
  const settings = CAROUSEL_SETTINGS(props).settings;
  return <Slider {...settings}>{children}</Slider>;
};
