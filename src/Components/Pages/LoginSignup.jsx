import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SignupUser } from '../Api/SignupUser';
import { Link } from 'react-router-dom';
import NotificationSnackbar from '../NotificationSnackbar/NotificationSnackbar'; // 👈 Import Snackbar
import './CSS/LoginSignup.css';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginSignup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data) => {
    try {
      const response = await SignupUser(data);
      showSnackbar('Signup successful!', 'success');
    } catch (error) {
      if (error.response && error.response.data) {
        showSnackbar(error.response.data, 'error');
      } else {
        showSnackbar('Signup failed due to unknown error.', 'error');
      }
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Full Name" {...register('name')} />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <input type="email" placeholder="Email Address" {...register('email')} />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <input type="password" placeholder="Password" {...register('password')} />
            {errors.password && <p className="error">{errors.password.message}</p>}

            <p className="loginsignup-login">
              Already have an account? <span><Link to='/login'>Login here</Link></span>
            </p>

            <div className="loginsignup-agree">
              <input type="checkbox" id="agreeTerms" />
              <label htmlFor="agreeTerms">
                By continuing, I agree to the terms of use & privacy policy
              </label>
            </div>
            <button type="submit" className='buttonColor'>Sign Up</button>
          </div>
          <div className="loginsignup-brand">
            SHOPPER
          </div>
        </form>
      </div>

      {/* 👇 Snackbar here */}
      <NotificationSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleClose}
      />
    </div>
  );
};

export default LoginSignup;
