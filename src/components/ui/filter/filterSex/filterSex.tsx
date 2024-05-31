import './filterSex.style.css'
import { SvgFinder } from '../../../../Helper'
import { useState } from 'react'
import classNames from 'classnames'


export const FilterSex = () => {

  const [detailSexOpen, setDetailSexOpen] = useState (false)
  const [detailWomenOpen, setDetailWomenOpen] = useState (false)
  const [detailManOpen, setDetailManOpen] = useState (false)

  const openDetailsSexItem = () => {
    setDetailSexOpen (!detailSexOpen)
  }

  const openDetailsWomenItem = () => {
    setDetailWomenOpen (!detailWomenOpen)
    setDetailManOpen (false)
  }

  const openDetailsManItem = () => {
    setDetailManOpen (!detailManOpen)
    setDetailWomenOpen (false)
  }

  return (
    <div className='filter__sex'>
      <div className={classNames ('filter__sex_title', { 'filter__sex_title_open': detailSexOpen })}
           onClick={openDetailsSexItem}>
        <h5>Category</h5>
        <SvgFinder src='filter-arrow.svg' className='filter__sex_arrow' alt='close' />
      </div>
      <div className={classNames ('sex__item_count', { 'sex__item_count_open': detailSexOpen })}>
        <h5 className={classNames ('sex__item_title', { 'sex__item_title_open': detailWomenOpen })}
            onClick={openDetailsWomenItem}>Women</h5>
        <div className={classNames ('sex__list_count', { 'sex__list_count_open': detailWomenOpen })}>
          <div className='sex__list_item_count'>
            <div className='sex__list_item_square'></div>
            <h5>Dresses</h5>
          </div>
          <h5>T-Shirts</h5>
          <h5>Tops</h5>
          <h5>Shirts</h5>
          <h5>Blouses</h5>
          <h5>Skirts</h5>
          <h5>Shorts</h5>
          <h5>Sweaters </h5>
          <h5>Hoodies</h5>
          <h5>Trousers</h5>
          <h5>Jeans</h5>
          <h5>Jackets</h5>
          <h5>Coats</h5>
          <h5>Accessories</h5>
          <h5>Underwear</h5>
        </div>
        <h5 className={classNames ('sex__item_title', { 'sex__item_title_open': detailManOpen })}
            onClick={openDetailsManItem}>Man</h5>
        <div className={classNames ('sex__list_count', { 'sex__list_count_open': detailManOpen })}>
          <h5>Shirts</h5>
          <h5>T-Shirts</h5>
          <h5>Shorts</h5>
          <h5>Sweaters</h5>
          <h5>Hoodies</h5>
          <h5>Trousers</h5>
          <h5>Jeans</h5>
          <h5>Jackets</h5>
          <h5>Coats</h5>
          <h5>Accessories</h5>
          <h5>Underwear</h5>
        </div>
      </div>
    </div>
  )
}
