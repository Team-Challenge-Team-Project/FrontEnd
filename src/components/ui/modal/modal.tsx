import { TModalProps } from './types';
import { default as ReactModal } from 'rc-dialog';
import { EModalSize } from './enums';

const Modal = ({
  className,
  size = 'medium',
  isOpen,
  onCloseModal,
  children,
  closeIcon,
}: TModalProps): JSX.Element => {
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCloseModal?.(e);
  };

  return (
    <ReactModal
      className={className}
      onClose={handleCancel as never}
      closeIcon={closeIcon}
      width={EModalSize[size]}
      visible={isOpen}
      maskAnimation="fade"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
