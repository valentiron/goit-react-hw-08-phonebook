import * as React from 'react';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import TextField from '@mui/material/TextField';
import Footer from '../Footer/Footer';
import css from './LoginForm.module.css'

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box className={css.form}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
        className={css.input}
          label="Email"
          type="email"
          name="email"
          autoComplete="current-email"
        />
        <TextField
        className={css.input}
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <button className={css.btn} type="submit">Log In</button>
      </Box>
      <Footer />
    </>
  );
};

export default LoginForm;
