import { FC, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type TTypographyLinkProps = {
  children: ReactNode;
  to: string;
  className?: string;
  onClick?: (event?: MouseEvent) => void;
};

const TypographyLink: FC<TTypographyLinkProps> = ({
  children,
  to,
  className = '',
  onClick,
}) => {
  return (
    <Link className={className} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default TypographyLink;
