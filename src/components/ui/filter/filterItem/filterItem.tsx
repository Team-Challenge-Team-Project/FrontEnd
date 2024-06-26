import './filterItem.style.css'
import { useState } from 'react'
import classNames from 'classnames'
import { TFilterData } from '../types'
import { SvgFinder } from '../../../../Helper'
import { FilterItemSubTitle } from '../filterItemSubTitle/filterItemSubTitle'
import { FilterItemRadio } from '../filterItemRadio/filterItemRadio'
import { FilterItemProgressBar } from '../filterItemProgressBar/filterItemProgressBar'

export const FilterItem = (props: TFilterData) => {

  const [detailItemOpen, setDetailItemOpen] = useState (false)
  const [selectedItems, setSelectedItems] = useState<number[]> (props.selectedItems)

  const openDetailsItem = () => {
    setDetailItemOpen (!detailItemOpen)
  }

  const handleSelectedItemsChange = (selectedIndices: number[]) => {
    setSelectedItems (selectedIndices)
  }
  return (
    <div className='filter__item'>
      <div className={classNames ('filter__item_title', { 'filter__item_title_open': detailItemOpen })}
           onClick={openDetailsItem}>
        <h4>{props.title} {selectedItems.length > 0 ? `(${selectedItems.length})` : ''}</h4>
        <SvgFinder src='filter-arrow.svg' className='filter__item_arrow' alt='close' />
      </div>
      <div className={classNames ('item__list_count', { 'item__list_count_open': detailItemOpen })}>
        {props.subTitle ? (
          <FilterItemSubTitle subTitleItems={props.subTitle}  />
        ) : props.radioItem ? (
          <FilterItemRadio radioItems={props.radioItem} onSelectedItemsChange={handleSelectedItemsChange} />
        ) : props.progressBarItem ? (
          <FilterItemProgressBar progressBarItems={props.progressBarItem}/>
        ) : null}
      </div>
    </div>
  )
}