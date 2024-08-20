import { Link } from 'react-router-dom';
import { TBreadcrumbItems } from './types';
import Typography, { ETypographyVariant } from '../typography';

export default function BreadcrumbItem({
  link,
  title,
  className,
}: TBreadcrumbItems) {
  if (link) {
    return (
      <Link to={link} className={className}>
        {title}
      </Link>
    );
  }
  return (
    <Typography
      as="span"
      variant={ETypographyVariant.TextS18Medium}
      className={className}
    >
      {title}
    </Typography>
  );
}
