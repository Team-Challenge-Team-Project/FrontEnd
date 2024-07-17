import { CSSProperties, MouseEventHandler } from 'react';
import { ECarouselArrow } from './enums';
import clsx from 'clsx';
import Icon from '../../icon';

type TProps = {
  type: ECarouselArrow;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
};

export const CarouselArrow = ({ type, onClick, className, style }: TProps) => {
  return (
    <div
      className={clsx('arrow', className)}
      style={{ ...style }}
      onClick={onClick}
    >
      <Icon
        className="arrow__img-container"
        type={type === ECarouselArrow.Previous ? 'ArrowLeft' : 'ArrowRight'}
      />
    </div>
  );
};
