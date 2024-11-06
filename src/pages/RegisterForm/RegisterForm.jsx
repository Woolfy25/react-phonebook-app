import React from 'react';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
    <form
      autoComplete="on"
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-items-center w-80 rounded gap-12 p-5 my-auto mx-auto shadow-xl"
      style={{
        backdropFilter: 'blur(40px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <h2 className="text-xl font-semibold text-slate-100">Create account</h2>
      <div className="flex flex-col items-center justify-items-center rounded gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-64 border-b-2 border-slate-100 bg-transparent text-slate-100 placeholder:text-slate-100 outline-none pb-1 pl-3 text-lg"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-64 border-b-2 border-slate-100 bg-transparent text-slate-100 placeholder:text-slate-100 outline-none pb-1 pl-3 text-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-64 border-b-2 border-slate-100 bg-transparent text-slate-100 placeholder:text-slate-100 outline-none pb-1 pl-3 text-lg"
        />
        <button
          type="submit"
          className="text-slate-100 font-medium px-2 py-1 rounded-xl w-56 bg-purple-500 hover:bg-purple-400"
        >
          Register
        </button>
      </div>
      <div className="flex flex-col items-center justify-items-center gap-2">
        <h4 className="text-slate-100">Already have an account?</h4>
        <NavLink
          to="/login"
          className="text-slate-100 font-medium px-2 py-1 rounded-xl w-40 bg-purple-500 hover:bg-purple-400 text-center"
        >
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default RegisterForm;
