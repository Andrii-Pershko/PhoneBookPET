import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, selectFilterField } from 'redux/selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // беремо значення поля find contacts
  const filterValue = useSelector(selectFilterField);

  // фільтруємо масив якщо було змінено значення поля find contacts
  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );

  return (
    <>
      {contacts.length === 0 ? (
        <div>You not have contcts</div>
      ) : (
        <ol>
          {filteredContacts().map(({ name, number, id }, index) => (
            <li key={id} style={{ width: '500px' }}>
              <span
                style={{
                  overflow: 'auto',
                  marginRight: '10px',
                }}
                className={css.name}
              >
                {index + 1}. {name}
              </span>
              <span className={css.number}>{number}</span>
              <button
                type="button"
                id={id}
                onClick={() => {
                  Notiflix.Notify.success(`You delete contact`);
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
