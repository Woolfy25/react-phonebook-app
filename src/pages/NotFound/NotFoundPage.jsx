import { Link, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

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
    <div
      className="flex flex-col items-center justify-items-center w-80 rounded gap-12 p-5 my-auto mx-auto shadow-xl"
      style={{
        backdropFilter: 'blur(40px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      {timer && <Navigate to="/" />}
      <h2 className="text-5xl font-medium text-slate-100 text-center">
        Page not found!
      </h2>
      <Link
        className="no-underline p-2 border-2 border-slate-100 text-l text-slate-100 text-center"
        to="/"
      >
        Return to the website
      </Link>
      <p className="text-xl font-medium text-slate-100 text-center">
        You will be redirected to the home page in {timerSeconds}
      </p>
    </div>
  );
};

export default NotFoundPage;
