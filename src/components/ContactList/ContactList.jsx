import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(state => state.filter);

  const filterontacts = getFilterContacts();

  function getFilterContacts() {
const lowercaseFilter = filter.toLowerCase();

return contacts.filter(contact =>
  contact.name.toLowerCase().includes(lowercaseFilter)
);
  }

  return (
    <ul>
      {filterontacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
};

export default ContactList;