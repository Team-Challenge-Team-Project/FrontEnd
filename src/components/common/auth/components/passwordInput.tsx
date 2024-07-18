import { Field } from 'formik';
import { FC, useState } from 'react';
import Button from 'src/components/ui/button';

export const PasswordInput: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label className="auth__form-label" htmlFor="password">
        Password
      </label>
      <Field name="password">
        {({ field, meta }) => (
          <div className="auth__form-field">
            <input
              className="auth__form-field-input"
              type={showPassword ? 'text' : 'password'}
              {...field}
            />
            <Button.Icon
              icon={showPassword ? 'View' : 'ViewHide'}
              className="auth__form-field-icon"
              onClick={togglePasswordVisibility}
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </>
  );
};
