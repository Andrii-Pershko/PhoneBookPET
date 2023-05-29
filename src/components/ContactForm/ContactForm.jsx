import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './ContactForm.module.css';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { useState } from 'react';

Notiflix.Notify.init({
  timeout: 2000,
});

// initial значення для бібліотеки formik
const initialValues = {
  name: '',
  number: '',
};

// Валідація імені та номера телефона
let userSchema = object().shape({
  name: string().min(2).required(),
  number: string()
    .min(10, '10 number without space: 0679543102')
    .matches(
      /^((\(\d{3}\)?)|(\d{3}))?\d{3}\d{4}$/,
      '10 number without space: 0679543102'
    )
    .required(),
});

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [loadingButton, setLoadingButton] = useState(false);

  const handleSubmit = async ({ name, number }, action) => {
    setLoadingButton(true);
    if (name.length > 25) {
      alert('The length of the name should not exceed 25 characters');
      setLoadingButton(false);
      return;
    }
    //якщо імя повторюється випливає попередження
    if (contacts.find(contact => contact.name === name) !== undefined) {
      Notiflix.Notify.failure(`${name} already in your contact book`);
      setLoadingButton(false);
      return;
    }

    await dispatch(addContact({ name, number }));

    Notiflix.Notify.success(`You added ${name} to phonebook`);
    action.resetForm();
    setLoadingButton(false);
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
          <Field
            className={'input'}
            type="text"
            name="name"
            placeholder="name"
          />
          <ErrorMessage component="p" className={css.nameError} name="name" />
        </label>

        <label className={css.labelBox}>
          <p>Phone</p>
          <Field
            type="tel"
            name="number"
            placeholder="number"
            title="10 number without space: 0679543102"
          />
          <ErrorMessage component="p" className={css.nameError} name="number" />
        </label>

        <button type="submit">
          {loadingButton ? 'loading...' : 'Add contact'}
        </button>
      </Form>
    </Formik>
  );
}
