import clsx from 'clsx';
import type { FC } from 'react';
import { TCheckboxProps } from './types';

const Checkbox: FC<TCheckboxProps> = ({
  checked,
  type = 'checkbox',
  defaultChecked,
  id,
  label,
  onChange,
  className,
}): JSX.Element => {
  const handleChange = () => {
    onChange?.(id);
  };

  return (
    <div className={clsx('checkbox__item-wrapper', className)}>
      <input
        checked={checked}
        className="checkbox__input"
        defaultChecked={defaultChecked === id}
        id={id}
        onChange={handleChange}
        type={type}
      />
      {label && (
        <label className="checkbox__label" htmlFor={id}>
          <span>{label}</span>
        </label>
      )}
    </div>
  );
};

export default Checkbox;
