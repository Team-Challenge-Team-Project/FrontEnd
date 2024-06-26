import clsx from 'clsx';
import { IconType, iconTypes } from './iconType';

const getIcon = (type: string) => iconTypes.get(type);

type TProps = {
  className?: string;
  type: IconType;
};

export const Icon = ({ type, className }: TProps) => {
  return <div className={clsx(className, 'icon')}>{getIcon(type)}</div>;
};
