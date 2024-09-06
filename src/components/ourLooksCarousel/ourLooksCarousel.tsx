import { ourLooksData } from '../../utils/fakeOurLooksData'
import { Carousel } from '../ui/carousel'
import { LookComponent, PosterComponent } from './components'
import './ourLooksCarousel.style.css'


export const OurLooksCarousel = () => {
  return (
    <Carousel className='our-looks__carousel' arrows infinite>
      {ourLooksData.map (({ img, id, look }) => (
        <div key={id} className='carousel__container'>
          <PosterComponent lookImg={img} />
          <LookComponent look={look} id={''} img={''} />
        </div>
      ))}
    </Carousel>
  )
}
