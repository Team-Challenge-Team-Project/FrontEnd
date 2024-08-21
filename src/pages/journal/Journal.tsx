// type Props = {};
import Typography, { ETypographyVariant } from 'src/components/ui/typography';
import './Journal.styled.css';
import { ImageFinder } from 'src/Helper';
import { Pagination } from 'src/components/ui/pagination';

const journalData = [
  {
    key: 'journal1',
    img: 'journal1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit amet,',
  },
  {
    key: 'journal2',
    img: 'journal2.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit amet,',
  },
  {
    key: 'journal3',
    img: 'journal3.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit amet,',
  },
  {
    key: 'journal4',
    img: 'journal4.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  dolor sit amet,',
  },
];

export const Journal = () => {
  return (
    <div className="the-journal">
      <Typography
        as="h2"
        variant={ETypographyVariant.H2BoldHeading}
        className="favorites__heading"
      >
        The Journal
      </Typography>

      <div className="journal-container">
        {journalData.map((journal) => (
          <div className="journal-item" key={journal.key}>
            <ImageFinder
              src={journal.img}
              alt="girl.jpg"
              className="girl.jpg"
            />
            <Typography as="p">{journal.description}</Typography>
          </div>
        ))}
      </div>
      <div className="journal__pagination">
        <Pagination />
      </div>
    </div>
  );
};
