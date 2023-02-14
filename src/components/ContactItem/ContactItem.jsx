import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './ContactItem.module.css'

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item} key={id}>
      <p className={css.description}>
        <span className={css.name}>{name}:</span>{number}
      </p>
      <button className={css.btn}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};


export default ContactItem;