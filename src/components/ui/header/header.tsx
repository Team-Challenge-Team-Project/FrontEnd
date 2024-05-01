import './header.style.css'
import loupe from '../../../assets/svg/loupe.svg'
import like from '../../../assets/svg/like.svg'
import earth from '../../../assets/svg/earth.svg'
import login from '../../../assets/svg/login.svg'
import bag from '../../../assets/svg/bag.svg'

export const Header = () => {
  return <div className='header'>
    <nav className='nav-bar__count'>
      <ul className='nav__list'>
        <li className='nav__list_item'>Women</li>
        <li className='nav__list_item'>Men</li>
        <li className='nav__list_item'>The Journal</li>
      </ul>
    </nav>
    <h1 className='title'>WEARHOUSE</h1>
    <div className='links__count'>
      <div className='links__bottom'>
        <img className='links__bottom_img' src={loupe} alt='loupe' />
      </div>
      <div className='links__bottom'>
        <img className='links__bottom_img' src={like} alt='like' />
      </div>
      <div className='links__bottom'>
        <img className='links__bottom_img' src={earth} alt='earth' />
      </div>
      <div className='links__bottom'>
        <img className='links__bottom_img' src={login} alt='login' />
      </div>
      <div className='links__bottom'>
        <img className='links__bottom_img' src={bag} alt='bag' />
      </div>
    </div>
  </div>
}
