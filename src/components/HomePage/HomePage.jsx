import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import HomeAuth from '../HomeAuth/HomeAuth';
import css from './HomePage.module.css'

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <section className={css.home}>
        <h1 className={css.title}>Welcome to your phonebook</h1>
        <p className={css.text}>
          If you want your contacts list be not only in your phone, but also in
          a safe place, this app is for you
        </p>
        {!isLoggedIn && <HomeAuth />}
      </section>
      <Footer />
    </>
  );
};

export default HomePage;