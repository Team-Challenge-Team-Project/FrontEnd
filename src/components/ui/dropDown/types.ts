import { ReactNode } from 'react';
import { IconType } from '../icon';

export type TDropDownTriggers = 'click' | 'hover';

type TDropDownClasses = {
  dropDown?: string;
  dropDownPanel?: string;
  dropDownButton?: string;
  dropdownButtonIcon?: string;
};

export type TDropDownProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  trigger?: TDropDownTriggers;
};

export type TDropDownButtonProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  icon?: IconType;
};

export type TDropDownPanelProps = TDropDownButtonProps & {
  transition?: number;
  menu?: ReactNode;
};
