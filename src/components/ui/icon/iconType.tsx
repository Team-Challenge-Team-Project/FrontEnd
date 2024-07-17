import { SvgFinder } from 'src/Helper';

export type IconType =
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowDown'
  | 'Heart'
  | 'FilterDown'
  | 'RightCircleArrow'
  | 'LeftCircleArrow';

export const iconTypes = new Map([
  [
    'ArrowLeft',
    <SvgFinder key="arrow-left" src="arrow-left.svg" alt="arrow-left" />,
  ],
  [
    'ArrowRight',
    <SvgFinder key="arrow-right" src="arrow-right.svg" alt="arrow-right" />,
  ],
  [
    'ArrowDown',
    <SvgFinder key="arrow-bottom" src="arrow-bottom.svg" alt="arrow-bottom" />,
  ],
  ['Heart', <SvgFinder key="heart" src="heart.svg" alt="heart" />],
  [
    'FilterDown',
    <SvgFinder key="filter-down" src="filter.svg" alt="filter-down" />,
  ],
  [
    'RightCircleArrow',
    <SvgFinder
      key="right-circle-arrow"
      src="right-circle-arrow.svg"
      alt="right-circle-arrow"
    />,
  ],
  [
    'LeftCircleArrow',
    <SvgFinder
      key="left-circle-arrow"
      src="left-circle-arrow.svg"
      alt="left-right-circle-arrow"
    />,
  ],
]);
