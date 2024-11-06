import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col w-72">
      <button
        onClick={handleLogout}
        type="button"
        className="text-slate-100 font-medium px-2 py-1 rounded-xl bg-purple-500 hover:bg-purple-400"
      >
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
