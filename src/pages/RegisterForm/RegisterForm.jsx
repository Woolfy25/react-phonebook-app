import React from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
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
      className="flex flex-col items-center justify-items-center w-80 gap-6 border-4 border-white p-4 mt-6"
    >
      <h2 className="text-xl font-semibold">Create account</h2>
      <label className="text-base flex flex-col justify-items-center font-medium gap-2">
        Name
        <input type="text" name="name" />
      </label>
      <label className="text-base flex flex-col justify-items-center font-medium gap-2">
        Email
        <input type="text" name="email" />
      </label>
      <label className="text-base flex flex-col justify-items-center font-medium gap-2">
        Password
        <input type="password" name="password" />
      </label>
      <button
        type="submit"
        className="text-base font-medium px-2 py-1 border-2 border-white"
      >
        Register
      </button>
      <div className="flex flex-col items-center justify-items-center mt-4 gap-2">
        <h4 className="text-base">Already have an account?</h4>
        <NavLink
          to="/login"
          className="text-base font-medium px-2 py-1 border-2 border-white"
        >
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default RegisterForm;
