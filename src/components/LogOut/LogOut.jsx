import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col mx-auto mt-6 w-96">
      <button
        onClick={handleLogout}
        type="button"
        className="p-2 border-2 border-white"
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
