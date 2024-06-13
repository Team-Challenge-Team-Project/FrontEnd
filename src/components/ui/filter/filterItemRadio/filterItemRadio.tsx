import './filterItemRadio.style.css'
import { TRadioItem } from '../types'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

interface FilterItemRadioProps {
  radioItems: TRadioItem;
  onSelectedItemsChange: (selectedIndices: number[]) => void;
}

export const FilterItemRadio = ({ radioItems, onSelectedItemsChange }: FilterItemRadioProps) => {

  const [selectedIndices, setSelectedIndices] = useState<number[]> ([])

  useEffect(() => {
    onSelectedItemsChange(selectedIndices);
  }, [selectedIndices, onSelectedItemsChange]);

  const choiceRadioItem = (index: number) => {
    setSelectedIndices(prevSelected => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(i => i !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  return (
    <>
      {radioItems.map ((item, index) => (
        <div key={index}
             className='item__radio_count'
             onClick={() => choiceRadioItem (index)}>
          <div
            className={classNames ('item__radio_square',
              { 'item__radio_square_open': selectedIndices.includes (index) })}>
          </div>
          <h5>{item}</h5>
        </div>
      ))}
    </>
  )
}