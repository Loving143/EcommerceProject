import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import './Signup.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8080/api/signup", data);
      alert("User registered successfully!");
    } catch (err) {
      alert("Signup failed. Check console for errors.");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" {...register('name')} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input type="email" placeholder="Email Address" {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
