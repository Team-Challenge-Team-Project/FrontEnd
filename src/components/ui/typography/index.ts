import './typography.styled.css';
import InternalTypography from './typography';
import TypographyLink from './components/TypographyLink';
export * from './typography';
export * from './enums';

const Typography = InternalTypography as typeof InternalTypography & {
  Link: typeof TypographyLink;
};

Typography.Link = TypographyLink;

export default Typography;
