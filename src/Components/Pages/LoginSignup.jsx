import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { SignupUser } from '../Api/SignupUser';
import { Link } from 'react-router';
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

  const onSubmit = async (data) => {
    try {
      await SignupUser(data);  // <-- Using the API abstraction
      alert('Signup successful!');
    } catch (error) {
      alert('Signup failed.');
      console.error(error);
    }
  };
    return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
         <form  onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        
        <div className="loginsignup-fields">
           <input type="text" placeholder="Full Name" {...register('name')} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input type="email" placeholder="Email Address" {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register('password')} />
    
     <p className="loginsignup-login">
          Already have an account? <span> <Link to='/login'>Login here</Link></span>
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
    </div>
  );
}

export default LoginSignup;