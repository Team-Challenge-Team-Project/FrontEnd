import clsx from 'clsx';
import { Field } from 'formik';
import { FC, ReactNode } from 'react';
type TCheckboxProps = {
  text?: string | ReactNode;
  className?: string;
};
export const FormCheckbox: FC<TCheckboxProps> = ({ text, className }) => {
  return (
    <label className={clsx('auth-form__checkbox', className)}>
      <Field type="checkbox" name="toggle" />
      {text}
    </label>
  );
};
