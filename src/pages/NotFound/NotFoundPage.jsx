import { Link, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(timerSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerSeconds]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full m-auto flex flex-col items-center justify-items-center gap-6">
      {timer && <Navigate to="/" />}
      <h2 className="text-5xl font-medium">Page not found!</h2>
      <Link
        className="no-underline p-4 border-2 border-black text-xl text-black"
        to="/"
      >
        Return to the website
      </Link>
      <p className="text-xl font-medium">
        You will be redirected to the home page in {timerSeconds}
      </p>
    </div>
  );
};

export default NotFoundPage;
