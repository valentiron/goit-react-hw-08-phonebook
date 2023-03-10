import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css'

Notify.init({
  width: '320px',
  closeButton: false,
  timeout: 5000,
});

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = event.currentTarget.elements;

    if (contacts.find(contact => contact.name === name.value)) {
      return Notify.failure(
        `Sorry, a contact with that name: "${name.value}" already exists. Try a different name.`
      );
    }

    const newContact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(newContact));

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.title}>Name</span>
        <input className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.title}>Number</span>
        <input className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type='submit'>Add contact</button>
    </form>
  );
}
