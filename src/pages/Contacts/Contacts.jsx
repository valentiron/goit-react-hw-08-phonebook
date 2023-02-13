import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm'
import Filter from '../../components/Filter/Filter'
import Loader from '../../components/Loader/Loader'
import ContactList from '../../components/ContactList/ContactList';
import Footer from '../../components/Footer/Footer';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>User Contacts</title>
      </Helmet>
      <div>
        <Section title ='Phonebook'>
            <ContactForm/>
        </Section>
        <Section title ="Contacts">
            <Filter/>
            {isLoading && !error && <Loader />}
            <ContactList />
        </Section>
      </div>
      <Footer/>
    </>
  );
};

export default Contacts;