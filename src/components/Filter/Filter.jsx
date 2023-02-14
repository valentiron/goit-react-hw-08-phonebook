import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilter);

  const onChange = query => {
    dispatch(filterContacts(query));
  };

  const handleChange = event => onChange(event.target.value);

  return (
    <label className={css.label}>
      <p className={css.description}>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter the search name"
      />
    </label>
  );
};

export default Filter;