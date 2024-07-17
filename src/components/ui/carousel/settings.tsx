import clsx from 'clsx';
import { CarouselArrow, ECarouselArrow } from './carouselArrow';
import { TCarouselProps } from './types';
import { ReactNode } from 'react';

export const CAROUSEL_SETTINGS = (props: TCarouselProps) => {
  const {
    arrows = false,
    className,
    dots = false,
    fade = false,
    infinite = false,
    nextArrow,
    prevArrow,
    slidesToScroll = 1,
    slidesToShow = 1,
    speed = 500,
    swipeToSlide = false,
    dotsClassName,
  } = props;

  return {
    settings: {
      arrows,
      className,
      dots,
      fade,
      infinite,
      nextArrow: arrows ? (
        <CarouselArrow type={ECarouselArrow.Next} />
      ) : (
        nextArrow
      ),
      prevArrow: arrows ? (
        <CarouselArrow type={ECarouselArrow.Previous} />
      ) : (
        prevArrow
      ),
      speed,
      slidesToScroll,
      slidesToShow,
      swipeToSlide,
      appendDots: (dots: Iterable<ReactNode>) => (
        <div>
          <ul className={clsx('dots', dotsClassName)}>{dots}</ul>
        </div>
      ),
    },
  };
};
