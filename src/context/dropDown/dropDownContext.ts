import { createContext } from 'react';
import type { RefObject } from 'react';
import { TDropDownTriggers } from 'src/components/ui/dropDown';

export type TDropDownState = {
  isDropDownOpen?: boolean;
  trigger?: TDropDownTriggers;
  onClickButtonDropDown?: () => void;
  onHoverOverButtonDropDown?: () => void;
  onHoverLeaveButtonDropDown?: () => void;
  refButtonDropDown?: RefObject<HTMLDivElement>;
  refPanelDropDown?: RefObject<HTMLDivElement>;
};

export const DropDownContext = createContext<TDropDownState | null>(null);
export const DropDownProvider = DropDownContext.Provider;
