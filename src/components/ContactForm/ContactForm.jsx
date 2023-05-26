import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './ContactForm.module.css';
import Notiflix from 'notiflix';

// import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
// import { addContacts } from 'reduxCopy/contactsSlice';

// initial значення для бібліотеки formik
const initialValues = {
  name: '',
  number: '',
};

// Валідація імені та номера телефона
let userSchema = object().shape({
  name: string().min(2).required(),
  number: string()
    .min(10, '10 number not with space: 067 954 310')
    .matches(
      /^((\(\d{3}\)?)|(\d{3}))?\d{3}\d{4}$/,
      '10 number not with space: 067 954 310'
    )
    .required(),
});

export function ContactForm() {
  const handleSubmit = ({ name, number }, action) => {
    //якщо імя повторюється випливає попередження

    Notiflix.Notify.success(`You added ${name} to phonebook`);
    //скидання полів форми
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form autoComplete="off">
        <label className={css.labelBox}>
          <p>Name</p>
          <Field className={'input'} type="text" name="name" />
          <ErrorMessage component="p" className={css.nameError} name="name" />
        </label>

        <label className={css.labelBox}>
          <p>Phone</p>
          <Field type="tel" name="number" />
          <ErrorMessage component="p" className={css.nameError} name="number" />
        </label>

        <button type="submit">addContact</button>
      </Form>
    </Formik>
  );
}
