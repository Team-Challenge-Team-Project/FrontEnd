import { Field, Form, Formik } from 'formik';
import Button from 'src/components/ui/button';
import { Divider } from 'src/components/ui/divider';
import { Typography } from 'src/components/ui/typography';
import { TActiveAuth, TFormValues } from '../types';
import { EmailInput, FormCheckbox, PasswordInput } from '../components';

type TSignupProps = {
  onSubmit: (values: TFormValues) => void;
  onChangeAuth: (value: TActiveAuth) => void;
};

export const Signup = ({ onSubmit, onChangeAuth }: TSignupProps) => {
  //   TFormValues;
  const initialValues = {};
  const handleSubmit = (values) => {
    console.log('submit', values);
    onSubmit(values);
  };

  return (
    <section className="signup">
      <Typography as="h2" className="auth__header">
        CREATE AN ACCOUNT
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="auth__form">
          <EmailInput />
          <PasswordInput />
          <FormCheckbox text={<a href="#">Accept Terms and Conditions</a>} />

          <Button type="submit" classes={{ button: 'auth__btn' }}>
            Create an Account
          </Button>
        </Form>
      </Formik>

      <Divider className="auth__divider" />

      <Typography as="span">Already have an account</Typography>
      <Button
        classes={{ button: 'auth__btn auth__form-btn__toggle ' }}
        onClick={() => onChangeAuth('login')}
      >
        Sign In
      </Button>
    </section>
  );
};
