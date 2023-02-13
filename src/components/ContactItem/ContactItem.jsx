import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li key={id}>
      <p>
        <span>{name}</span>:{number}
      </p>
      <button
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};


export default ContactItem;