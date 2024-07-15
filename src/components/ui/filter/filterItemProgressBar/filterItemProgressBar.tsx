import './filterItemProgressBar.style.css'
import { TProgressBarItem } from '../types'
import React, { useState } from 'react'
import ReactSlider from 'react-slider'

interface FilterProgressBarProps {
  progressBarItems: TProgressBarItem;
}

export const FilterItemProgressBar = ({ progressBarItems }: FilterProgressBarProps) => {
  const [startValue, setStartValue] = useState<string> (String (''))
  const [endValue, setEndValue] = useState<string> (String (''))


  const handleNumericInputLeft = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*$/.test (value)) {
      setStartValue (value)
    }
    const exampleThumbLeft = document.querySelector ('.example-thumb-0') as HTMLElement
    console.log (exampleThumbLeft.style.left)
    console.log (value)
    exampleThumbLeft.style.left = `${100}px`
  }

  const handleNumericInputRight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*$/.test (value)) {
      setEndValue (value)
    }
    const exampleThumbRight = document.querySelector ('.example-thumb-1')as HTMLElement
    console.log (exampleThumbRight?.style.left)
  }

  const changeSlider = ({ value }: { value: number[], index: number }) => {
    setStartValue (String (value[0] * 100))
    setEndValue (String (value[1] * 100))
  }

  return (
    <div className='progress-bar_count'>
      <div className='progress-bar__window_count'>
        <input
          type='text'
          className='progress-bar__input progress-bar__input_min'
          placeholder={`${progressBarItems.currencies[0]} ${progressBarItems.start}`}
          value={startValue}
          onChange={(e) => handleNumericInputLeft (e)}
          inputMode='numeric'
        />
        <div className='progress-bar__window_pass'>-</div>
        <input
          type='text'
          className='progress-bar__input progress-bar__input_max'
          placeholder={`${progressBarItems.currencies[0]} ${progressBarItems.end}`}
          value={endValue}
          onChange={(e) => handleNumericInputRight (e)}
          inputMode='numeric'
        />
      </div>
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        defaultValue={[0, 10000]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={13}
        onChange={(value, index) => {
          changeSlider ({ value, index })
        }}
      />
    </div>
  )
}
