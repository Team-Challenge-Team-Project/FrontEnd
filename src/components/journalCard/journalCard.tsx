import './journalCard.style.css';
import journalImg from '../../assets/img/journal1.png';
import { Card } from '../ui/card';
import Typography from 'src/components/ui/typography';

export const JournalCard = () => {
  return (
    <Card
      size="x-small"
      body={
        <div className="journal__item">
          <img className="journal__item_img" src={journalImg} alt="img" />
          <Typography as="p" className="journal__item_text">
            Lorem ipsum dolor sit amet, Lorem ipsum
          </Typography>
        </div>
      }
    />
  );
};
