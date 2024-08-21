import React, { useState } from 'react';
import './collapse.styled.css';
import Icon from '../icon';
import clsx from 'clsx';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const Collapse: React.FC<CollapseProps> = ({
  title,
  children,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx('collapse', className)}>
      <button className="collapse__header" onClick={toggleCollapse}>
        {title}
        <span className={`collapse__icon ${isOpen ? 'open' : ''}`}>
          <Icon type="ArrowDown" />
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};
