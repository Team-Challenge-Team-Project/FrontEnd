import './filterItemProgressBar.style.css'
import { TProgressBarItem } from '../types'

interface FilterProgressBarProps {
  progressBarItems: TProgressBarItem;
}

export const FilterItemProgressBar = ({ progressBarItems }: FilterProgressBarProps) => {
  return (
    <div className='progress-bar_count'>
      <div className='progress-bar__window_count'>
        <div
          className='progress-bar__window progress-bar__window_min'>
          {`${progressBarItems.currencies[0]} ${progressBarItems.start}`}
        </div>
        <div className='progress-bar__window_pass'>-</div>
        <div className='progress-bar__window progress-bar__window_max'>
          {`${progressBarItems.currencies[0]} ${progressBarItems.end}`}
        </div>
      </div>
      <div className='progress-bar__scroll_count'>
        <div className='progress-bar__scroll progress-bar__scroll_min'></div>
        <div className='progress-bar__scroll_line'></div>
        <div className='progress-bar__scroll progress-bar__scroll_max'></div>
      </div>
    </div>
  )
}
