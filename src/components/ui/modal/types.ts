import { ReactNode } from 'react';

type IModalSize = 'small' | 'medium' | 'large' | 'full';

export type TModalProps = {
  className?: string;
  isOpen: boolean;
  size?: IModalSize;
  onCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  closeIcon?: boolean;
};
