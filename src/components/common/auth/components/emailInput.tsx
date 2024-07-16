import { Field } from 'formik';
import { FC } from 'react';

export const EmailInput: FC = () => {
  return (
    <>
      <label htmlFor="email" className="auth__form-label">
        Email
      </label>

      <Field name="email">
        {({ field, meta }) => (
          <div className="auth__form-field">
            <input className="auth__form-field-input" type="email" {...field} />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </>
  );
};
