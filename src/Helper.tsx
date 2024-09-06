type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

type SVGProps = {
  src: string;
  className?: string;
  alt?: string;
};

const isDevelopment = process.env.NODE_ENV === 'development'


export const ImageFinder = ({ src, className, alt }: ImageProps) => {

  //only for development use
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  if (isDevelopment) {
    const Icon = require (`./assets/img/${'girl.jpg'}`)
    return <img src={Icon} className={className} alt={alt} />
  } else {
    const Icon = (`https://dev.worldmandia.cc/image//${src}`)
    return <img src={Icon} className={className} alt={alt} />
  }
}

export const SvgFinder = ({ src, className, alt }: SVGProps) => {
  //only for development use
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  if (isDevelopment) {
    const Icon = require (`./assets/svg/${src}`)
    return <img src={Icon} className={className} alt={alt} />
  } else {
    const Icon = (`https://dev.worldmandia.cc/image//${src}`)
    return <img src={Icon} className={className} alt={alt} />
  }
}
