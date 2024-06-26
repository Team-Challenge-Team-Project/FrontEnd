import { ReactNode } from 'react';

export type TBreadcrumbItems = {
  title?: ReactNode;
  key?: React.Key;
  link?: string;
  className?: string;
};

export type TBreadcrumbProps = {
  items: TBreadcrumbItems[];
  className?: string;
};
