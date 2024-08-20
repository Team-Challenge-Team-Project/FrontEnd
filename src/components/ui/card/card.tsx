import clsx from 'clsx';
import './card.styled.css';
import { ECardSize } from './enums';
import { TCardProps } from './types';

export const Card = ({
  className,
  size = ECardSize.small,
  cover,
  coverClassName,
  bodyClassName,
  body,
}: TCardProps) => {
  const headDom = cover ? (
    <div className={clsx(coverClassName || 'card-head', `card__head-${size}`)}>
      {cover}
    </div>
  ) : null;

  const bodyDom = (
    <div className={clsx(bodyClassName || 'card-body')}>
      {/* {loading ? loadingBlock : body} */}
      {body}
    </div>
  );

  return (
    <div
      className={clsx(
        {
          [`card-${size}`]: size === ECardSize[size],
        },
        'card',
        className
      )}
    >
      {headDom}
      {bodyDom}
      {/* {children} */}
    </div>
  );
};
