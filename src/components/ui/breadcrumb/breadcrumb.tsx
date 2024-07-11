import { TBreadcrumbProps } from './types';
import './breadcrumb.styled.css';
import BreadcrumbItem from './breadcrumbItem';
import clsx from 'clsx';

export const Breadcrumb = ({ items, className }: TBreadcrumbProps) => {
  return (
    <nav className={clsx('breadcrumb', className)}>
      {items.map(({ title, key, link }) => (
        <BreadcrumbItem
          title={title}
          key={key}
          link={link}
          className="breadcrumb__link"
        />
      ))}
    </nav>
  );
};
