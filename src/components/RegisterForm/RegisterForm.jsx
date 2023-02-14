import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import Footer from '../Footer/Footer';
import css from './RegisterForm.module.css'

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Box
      className={css.form}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField  label="Username" type="text" name="name" />
        <TextField
          label="Email"
          type="email"
          name="email"
          
        />
        <TextField
          label="Password"
          type="password"
          name="password"
        
        />
        <button className={css.btn} type='submit' variant='contained' color='primary'>Register</button>
      </Box>
      <Footer/>
    </>
  );
};

export default RegisterForm;
