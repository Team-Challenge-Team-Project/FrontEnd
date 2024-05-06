type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

type SVGProps = {
  src: string;
  className: string;
  alt: string;
};

export function ImageFinder({ src, className, alt }: ImageProps) {
  //only for development use
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Icon = require(`./assets/img/${src}`);
  return <img src={Icon} className={className} alt={alt} />;
}

export const SvgFinder = ({ src, className, alt }: SVGProps) => {
  //only for development use
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Icon = require(`./assets/svg/${src}`);
  return <img src={Icon} className={className} alt={alt} />;
};
