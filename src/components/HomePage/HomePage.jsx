import Footer from '../Footer/Footer';
import useAuth from '../../hooks/useAuth';
import HomeAuth from '../HomeAuth/HomeAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <section>
        <h1>Welcome to your phonebook</h1>
        <p>
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