import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { LoginUser } from '../Api/SignupUser';
import { Link } from 'react-router';
import './CSS/LoginSignup.css';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await LoginUser(data);  // <-- Using the API abstraction
      alert('Login successful!');
    } catch (error) {
      alert('Signup failed.');
      console.error(error);
    }
  };
    return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
         <form  onSubmit={handleSubmit(onSubmit)}>
        <h1>Log In</h1>
        
        <div className="loginsignup-fields">
        <input type="email" placeholder="Email Address" {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register('password')} />
    
     <p className="loginsignup-login">
         New user?<span> <Link to='/signup'>Signup here</Link></span>
        </p>
        
        <button type="submit" className='buttonColor'>Login</button>
        </div>
        <div className="loginsignup-brand">
          SHOPPER
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;