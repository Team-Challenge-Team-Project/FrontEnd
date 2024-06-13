import './filterItemSubTitle.style.css'
import { TSubTitle } from '../types'
// import classNames from 'classnames'


interface FilterItemSubTitleProps {
  subTitleItems: TSubTitle[];
}

export const FilterItemSubTitle = ({ subTitleItems }: FilterItemSubTitleProps) => {
  return (
    <>
      {subTitleItems.map ((item, index) => (
        <div key={index}
             className='item__sub_count'>
          <h5>{item.subTitleTitle}</h5>
        </div>
      ))}
    </>
  )
}
