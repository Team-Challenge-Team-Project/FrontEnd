import './filterItemProgressBar.style.css'
import { TProgressBarItem } from '../types'
import React, { useState } from 'react'

interface FilterProgressBarProps {
  progressBarItems: TProgressBarItem;
}

export const FilterItemProgressBar = ({ progressBarItems }: FilterProgressBarProps) => {
  const [startValue, setStartValue] = useState<string>(String(''));
  const [endValue, setEndValue] = useState<string>(String(''));

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setValue(value);
    }
  };

  return (
    <div className='progress-bar_count'>
      <div className='progress-bar__window_count'>
        <input
          type='text'
          className='progress-bar__input progress-bar__input_min'
          placeholder={`${progressBarItems.currencies[0]} ${progressBarItems.start}`}
          value={startValue}
          onChange={(e) => handleNumericInput(e, setStartValue)}
          inputMode='numeric'
        />
        <div className='progress-bar__window_pass'>-</div>
        <input
          type='text'
          className='progress-bar__input progress-bar__input_max'
          placeholder={`${progressBarItems.currencies[0]} ${progressBarItems.end}`}
          value={endValue}
          onChange={(e) => handleNumericInput(e, setEndValue)}
          inputMode='numeric'
        />
      </div>
      <div className='progress-bar__scroll_count'>
        <div className='progress-bar__scroll progress-bar__scroll_min'></div>
        <div className='progress-bar__scroll_line'></div>
        <div className='progress-bar__scroll progress-bar__scroll_max'></div>
      </div>
    </div>
  )
}
