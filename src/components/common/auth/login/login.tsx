import { Form, Formik } from 'formik';
import Button from 'src/components/ui/button';
import { Divider } from 'src/components/ui/divider';
import Typography, { ETypographyVariant } from 'src/components/ui/typography';
import { TActiveAuth, TFormValues } from '../types';
import { EmailInput, FormCheckbox, PasswordInput } from '../components';

type TLoginProps = {
  onSubmit: (values: TFormValues) => void;
  onChangeAuth: (value: TActiveAuth) => void;
};

export const Login = ({ onSubmit, onChangeAuth }: TLoginProps) => {
  const initialValues: TFormValues = { email: '', password: '', toggle: false };
  const handleSubmit = (values: TFormValues) => {
    console.log('submit', values);
    onSubmit(values);
  };

  return (
    <section className="login">
      <Typography
        as="h2"
        variant={ETypographyVariant.H2Regular}
        className="auth__header"
      >
        SIGN IN
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="auth__form">
          <EmailInput />
          <PasswordInput />
          <FormCheckbox className="login__checkbox" text="Keep Me Signed in" />

          <Button type="submit" classes={{ button: 'auth__btn' }}>
            Sign In
          </Button>
        </Form>
      </Formik>

      <Typography as="span" className="auth__forgot">
        Forgot Your Password?
      </Typography>

      <Divider className="auth__divider login__divider" />

      <Typography as="span">Don&apos;t have an account?</Typography>
      <Button
        classes={{ button: 'auth__btn auth__form-btn__toggle ' }}
        onClick={() => onChangeAuth('signup')}
      >
        Create an account
      </Button>
    </section>
  );
};
