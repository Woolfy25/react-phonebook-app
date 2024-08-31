import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/register" className={style.title}>Register</NavLink>
      <NavLink to="/login" className={style.title}>Log In</NavLink>
    </nav>
  );
};
