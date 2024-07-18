import { FC, ReactNode } from 'react';
import './divider.styled.css';
import clsx from 'clsx';

type TDividerProps = {
  children?: ReactNode;
  className?: string;
};

export const Divider: FC<TDividerProps> = ({ children, className }) => {
  return <div className={clsx('divider', className)}>{children}</div>;
};
