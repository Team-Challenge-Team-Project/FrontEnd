import React, { useEffect } from 'react';
import './drawer.styled.css';
import Button from '../button';
import clsx from 'clsx';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: 'right' | 'left' | 'top' | 'bottom';
  children: React.ReactNode;
  className?: string;
  closeIcon?: boolean;
};

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  className = '',
  children,
  closeIcon = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className={clsx('drawer-overlay', { open: isOpen })}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        className={clsx(
          'drawer',
          `drawer-${position}`,
          { open: isOpen },
          className
        )}
      >
        {closeIcon && (
          <Button.Icon
            className="drawer-close"
            onClick={onClose}
            icon="Close"
          />
        )}
        <div className="drawer-content">{children}</div>
      </div>
    </div>
  );
};
