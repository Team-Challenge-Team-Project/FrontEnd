import { ReactNode } from 'react';

export type TCheckboxProps = {
  key?: React.Key;
  checked?: boolean;
  defaultChecked?: string;
  id: string;
  label: string;
  type?: 'checkbox' | 'radio';
  className?: string;
  onChange?: (
    // event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

export type TCheckboxGroupOptions = {
  label: string;
  id: string;
  disabled?: boolean;
};

export type TCheckboxGroupProps = {
  type?: 'radio' | 'checkbox';
  options?: TCheckboxGroupOptions[];
  defaultChecked?: string;
  className?: string;
  onChange?: (value: ReactNode) => void;
};
