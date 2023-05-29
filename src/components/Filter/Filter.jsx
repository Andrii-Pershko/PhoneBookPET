import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  //змінюємо setStatusFilter в залежності від значення
  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <>
      <div className={css.filterBox}>
        <p style={{ marginBottom: '5px' }}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={handleFilterChange}
        />
      </div>
    </>
  );
}
