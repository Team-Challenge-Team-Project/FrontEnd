import { SvgFinder } from 'src/Helper';

export type IconType = 'ArrowLeft' | 'ArrowRight' | 'ArrowDown' | 'Heart';

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
]);
