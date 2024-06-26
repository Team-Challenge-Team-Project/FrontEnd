import { FC } from 'react';
import Checkbox from '..';
import clsx from 'clsx';
import { TCheckboxGroupProps } from '../types';

const CheckboxGroup: FC<TCheckboxGroupProps> = ({
  options,
  type = 'checkbox',
  defaultChecked,
  onChange,
  className,
}) => {
  return (
    <div className={clsx('checkbox-wrapper', className)}>
      {options?.map(({ label, id }) => {
        const optionId = `option-${label.replace(/\s+/g, '')}`;

        return (
          <Checkbox
            type={type}
            label={label}
            key={optionId}
            id={id}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
