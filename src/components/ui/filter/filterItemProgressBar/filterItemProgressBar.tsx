import './filterItemProgressBar.style.css';
import { TProgressBarItem } from '../types';
import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';

type FilterProgressBarProps = {
  progressBarItems: TProgressBarItem;
  clearFilter: boolean; // Изменено на boolean
};

export const FilterItemProgressBar = ({
  progressBarItems,
  clearFilter,
}: FilterProgressBarProps) => {
  const [startValue, setStartValue] = useState<number>(0);
  const [endValue, setEndValue] = useState<number>(10000);
  const [tempStartValue, setTempStartValue] = useState<string>(
    startValue.toString()
  );
  const [tempEndValue, setTempEndValue] = useState<string>(endValue.toString());

  useEffect(() => {
    if (clearFilter) {
      setStartValue(0); // Сброс значений
      setEndValue(10000); // Сброс значений
      setTempStartValue('0');
      setTempEndValue('10000');
    }
  }, [clearFilter]);

  const handleStartValueKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      const value = Number((e.target as HTMLInputElement).value);
      if (!isNaN(value) && value <= 8700) {
        setStartValue(value);
      }
      if (!isNaN(value) && value > endValue - 1300) {
        setTempStartValue(String(endValue - 1300));
        setStartValue(endValue - 1300);
      }
    }
  };

  const handleEndValueKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = Number((e.target as HTMLInputElement).value);
      if (!isNaN(value) && value >= 1300) {
        setEndValue(value);
      }
      if (!isNaN(value) && value < startValue + 1300) {
        setTempEndValue(String(startValue + 1300));
        setEndValue(startValue + 1300);
      }
    }
  };

  const changeSlider = (value: number[]) => {
    const [start, end] = value.map((v) => v * 100);
    if (start <= 8700 && end >= 1300) {
      setStartValue(start);
      setEndValue(end);
      setTempStartValue(start.toString());
      setTempEndValue(end.toString());
    }
  };

  return (
    <div className="progress-bar_count">
      <div className="progress-bar__window_count">
        <input
          type="text"
          className="progress-bar__input progress-bar__input_min"
          placeholder={`${progressBarItems.currencies[0]} ${progressBarItems.start}`}
          value={tempStartValue}
          onChange={(e) => setTempStartValue(e.target.value)}
          onKeyDown={handleStartValueKeyDown}
          inputMode="numeric"
        />
        <div className="progress-bar__window_pass">-</div>
        <input
          type="text"
          className="progress-bar__input progress-bar__input_max"
          placeholder={`${progressBarItems.currencies[0]} ${progressBarItems.end}`}
          value={tempEndValue}
          onChange={(e) => setTempEndValue(e.target.value)}
          onKeyDown={handleEndValueKeyDown}
          inputMode="numeric"
        />
      </div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        value={[startValue / 100, endValue / 100]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={13}
        onChange={(value) => changeSlider(value)}
      />
    </div>
  );
};
