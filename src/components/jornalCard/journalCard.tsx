import './journalCard.style.css';
import journalImg from '../../assets/img/journal1.png';

const JournalCard = () => {
  return (
    <div className="journal__item">
      <img className="journal__item_img" src={journalImg} alt="img" />
      <p className="journal__item_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet,
      </p>
    </div>
  );
};
export default JournalCard;
