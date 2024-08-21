import React, { useState, ReactNode, ReactElement, Children } from 'react';
import './tabs.styled.css';
import Button from '../button';

type TabsProps = {
  children: ReactElement<TabProps>[];
  initialActiveTab?: number;
  tabClassName?: string;
  panelClassName?: string;
};

type TabProps = {
  label: string;
  children: ReactNode;
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  initialActiveTab = 0,
  tabClassName = '',
  panelClassName = '',
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {Children.map(children, (child, index) => (
          <Button
            key={index}
            classes={{
              button: `tabs__tab ${tabClassName} ${
                index === activeTab ? 'active' : ''
              }`,
            }}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </Button>
        ))}
      </div>
      <div className={`tabs__panel ${panelClassName}`}>
        {Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};
