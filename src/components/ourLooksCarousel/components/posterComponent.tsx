import { ImageFinder } from 'src/Helper';

type TProps = {
  lookImg: string;
};

export const PosterComponent = ({ lookImg }: TProps) => {
  return (
    <div className="carousel__poster">
      <ImageFinder src={lookImg} className="poster-img" alt="IMG" />
    </div>
  );
};
