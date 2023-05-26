import css from '../SingUp/SignUp.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/UsersApi/usersApi';
import { object, string } from 'yup';

const initialValue = {
  email: '',
  password: '',
};

let userSchema = object().shape({
  email: string().email().required(),
  password: string()
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
      '6 symbol with min 1 number and 1 letter'
    )
    .required(),
});

export const Login = () => {
  const navigate = useNavigate();
  const [fn] = useLoginMutation();

  const handleSubmit = async ({ email, password }) => {
    const userData = {
      email,
      password,
    };

    try {
      const res = await fn(userData);
      localStorage.setItem('TOKEN', res.data.token);
      navigate('/', { replace: true });
    } catch (e) {
      alert('Invalid password or email try again');
    }
  };

  return (
    <>
      <h1>Hello Login</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form autoComplete="off">
          <label className={css.labelBox}>
            <p>Email</p>
            <Field className={'input'} type="email" name="email" />
            <ErrorMessage
              component="p"
              className={css.nameError}
              name="email"
            />
          </label>

          <label className={css.labelBox}>
            <p>Password</p>
            <Field type="password" name="password" />
            <ErrorMessage
              component="p"
              className={css.nameError}
              name="password"
            />
          </label>

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => {
              navigate('/registration', { replace: true });
            }}
          >
            SignUp
          </button>
        </Form>
      </Formik>
    </>
  );
};
