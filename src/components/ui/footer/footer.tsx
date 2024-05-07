import { SvgFinder } from '../../../Helper';
import './footer.style.css';

const socialList = [
  {
    src: 'instagram.svg',
    title: 'instagram',
  },
  {
    src: 'facebook.svg',
    title: 'facebook.svg',
  },
  {
    src: 'tiktok.svg',
    title: 'tiktok',
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__about">
            <span>About us</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="footer__social">
              {socialList.map((social) => (
                <SvgFinder
                  alt={social.title}
                  className="footer__social-img"
                  src={social.src}
                  key={social.title}
                />
              ))}
            </div>
          </div>

          <div className="footer__links">
            <ul>
              <li>Cookie Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
